import { IResType, withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;
    const live = await client.live.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({ ok: true, live });
  }
  if (req.method === "GET") {
    const {
      query: { page },
    } = req;
    const take = 10;
    const skip = (+page! - 1) * 5;
    const lives = await client.live.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      take,
      skip,
    });
    res.json({ ok: true, lives });
  }
};

export default withAPISession(withHandler(["POST", "GET"], handler, true));
