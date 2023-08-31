import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    query: { id },
    body,
    session: { user },
  } = req;
  const message = await client.message.create({
    data: {
      message: body.message,
      live: {
        connect: {
          id: +id?.toString()!,
        },
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.json({ ok: true, message });
};

export default withAPISession(withHandler(["POST"], handler, true));
