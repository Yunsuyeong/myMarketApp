import client from "@/utils/server/client";
import { IResType, withHandler } from "@/utils/server/server";
import { NextApiRequest, NextApiResponse } from "next";
import { withAPISession } from "@/utils/server/session";

const handler = async (req: NextApiRequest, res: NextApiResponse<IResType>) => {
  const profile = await client.user.findUnique({
    where: {
      id: req?.session?.user?.id,
    },
  });
  res.json({
    ok: true,
    profile,
  });
};

export default withAPISession(withHandler("GET", handler, true));
