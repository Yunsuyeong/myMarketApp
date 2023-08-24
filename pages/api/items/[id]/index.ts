import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    query: { id },
    session: { user },
  } = req;
  const item = await client.item.findUnique({
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
    },
  });
  const isLiked = Boolean(
    await client.fav.findFirst({
      where: {
        itemId: item?.id,
        userId: user?.id,
      },
    })
  );
  const terms = item?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedItems = await client.item.findMany({
    where: {
      OR: terms,
      NOT: {
        id: item?.id,
      },
    },
  });
  res.json({
    ok: true,
    item,
    isLiked,
    relatedItems,
  });
};

export default withAPISession(withHandler(["GET"], handler, true));
