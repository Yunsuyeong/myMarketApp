import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    query: { id },
    session: { user },
  } = req;
  const post = await client.post.findUnique({
    where: {
      id: +id?.toString()!,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      answers: {
        select: {
          id: true,
          answer: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          answers: true,
          interestings: true,
        },
      },
    },
  });
  const isInterested = Boolean(
    await client.interesting.findFirst({
      where: {
        postId: +id?.toString()!,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({ ok: true, post, isInterested });
};

export default withAPISession(withHandler(["GET"], handler, true));
