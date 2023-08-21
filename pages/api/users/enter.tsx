import client from "@/utils/server/client";
import { IResType, withHandler } from "@/utils/server/server";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const { email, phone } = req.body;
  const auth = phone ? { phone } : email ? { email } : null;
  if (!auth) {
    return res.status(400).json({ ok: false });
  }
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...auth,
          },
          create: {
            name: "ysy",
            ...auth,
          },
        },
      },
    },
  });
  console.log(token);
  return res.json({
    ok: true,
  });
};

export default withHandler("POST", handler, false);
