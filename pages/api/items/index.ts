import { withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;
    const item = await client.item.create({
      data: {
        name,
        price,
        description,
        image: "abc",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      item,
    });
  }
  if (req.method === "GET") {
    const items = await client.item.findMany({
      include: {
        _count: {
          select: {
            favs: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      items,
    });
  }
};

export default withAPISession(withHandler(["POST", "GET"], handler, true));
