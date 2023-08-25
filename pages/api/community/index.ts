import { withHandler } from "@/utils/server/server";
import { withAPISession } from "@/utils/server/session";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      body: { question, latitude, longitude },
      session: { user },
    } = req;
    const post = await client.post.create({
      data: {
        question,
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;
    const parsedLatitude = parseFloat(latitude?.toString()!);
    const parsedLongitude = parseFloat(longitude?.toString()!);
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            answers: true,
            interestings: true,
          },
        },
      },
      /*  where: {
        latitude: {
          gte: parsedLatitude - 0.005,
          lte: parsedLatitude + 0.005,
        },
        longitude: {
          gte: parsedLongitude - 0.02,
          lte: parsedLongitude + 0.02,
        },
      }, */
    });
    res.json({
      ok: true,
      posts,
    });
  }
};

export default withAPISession(withHandler(["POST", "GET"], handler, true));
