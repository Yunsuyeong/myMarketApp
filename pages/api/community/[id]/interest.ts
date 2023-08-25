import { withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    session: { user },
  } = req;
  const existedInterest = await client.interesting.findFirst({
    where: {
      userId: user?.id,
      postId: +id?.toString()!,
    },
    select: {
      id: true,
    },
  });
  if (existedInterest) {
    await client.interesting.delete({
      where: {
        id: existedInterest?.id,
      },
    });
  } else {
    await client.interesting.create({
      data: {
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
  }
  res.json({ ok: true });
};

export default withAPISession(withHandler(["POST"], handler, true));
