import client from "@/utils/server/client";
import { IResType, withHandler } from "@/utils/server/server";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { withAPISession } from "@/utils/server/session";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const { token } = req.body;
  const existedToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!existedToken) {
    return res.status(404).end();
  }
  req.session.user = {
    id: existedToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: existedToken?.userId,
    },
  });
  res.json({ ok: true });
};

export default withAPISession(withHandler(["POST"], handler, false));
