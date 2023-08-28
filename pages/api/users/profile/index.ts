import client from "@/utils/server/client";
import { IResType, withHandler } from "@/utils/server/server";
import { NextApiRequest, NextApiResponse } from "next";
import { withAPISession } from "@/utils/server/session";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  if (req.method === "POST") {
    const {
      body: { name, email, phone },
      session: { user },
    } = req;
    const current = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    if (email && email !== current?.email) {
      const existedUser = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        })
      );
      if (existedUser) {
        return res.json({
          ok: false,
          error: "Email Existed",
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      });
      res.json({ ok: true });
    }
    if (phone && phone !== current?.phone) {
      const existedUser = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
          select: {
            id: true,
          },
        })
      );
      if (existedUser) {
        return res.json({
          ok: false,
          error: "The Phone Number Existed",
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      });
      res.json({ ok: true });
    }
    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: { name },
      });
    }
    res.json({ ok: true });
  }
  if (req.method === "GET") {
    const profile = await client.user.findUnique({
      where: {
        id: req?.session?.user?.id,
      },
    });
    res.json({
      ok: true,
      profile,
    });
  }
};

export default withAPISession(withHandler(["POST", "GET"], handler, true));
