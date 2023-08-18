import client from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "12@naver.com",
      name: "ysy",
    },
  });
  res.json({
    ok: true,
  });
}
