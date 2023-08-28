import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const {
    session: { user },
  } = req;
  const solds = await client.sold.findMany({
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
  res.json({ ok: true, solds });
};

export default withAPISession(withHandler(["GET"], handler, true));
