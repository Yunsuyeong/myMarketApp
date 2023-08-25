import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const now = new Date();
  const {
    query: { id },
    body: { answer },
    session: { user },
  } = req;
  const Answer = await client.answer.create({
    data: {
      answer,
      createdAt: now,
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id?.toString()!,
        },
      },
    },
  });
  res.json({ ok: true, Answer });
};

export default withAPISession(withHandler(["POST"], handler, true));
