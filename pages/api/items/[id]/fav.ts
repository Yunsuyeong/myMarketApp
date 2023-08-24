import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    query: { id },
    session: { user },
  } = req;
  const existedFav = await client.fav.findFirst({
    where: {
      itemId: +id?.toString()!,
      userId: user?.id,
    },
  });
  if (existedFav) {
    await client.fav.delete({
      where: {
        id: existedFav.id,
      },
    });
  } else {
    await client.fav.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        item: {
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
