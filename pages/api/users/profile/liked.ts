import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    session: { user },
  } = req;
  const likes = await client.fav.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      item: {
        include: {
          _count: {
            select: {
              favs: true,
            },
          },
        },
      },
    },
  });
  res.json({ ok: true, likes });
};

export default withAPISession(withHandler(["GET"], handler, true));
