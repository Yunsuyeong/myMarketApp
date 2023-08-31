import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    query: { id },
  } = req;
  const live = await client.live.findUnique({
    where: {
      id: +id?.toString()!,
    },
    include: {
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
    },
  });
  res.json({ ok: true, live });
};

export default withAPISession(withHandler(["GET"], handler, true));
