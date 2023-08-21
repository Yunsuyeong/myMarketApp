import { NextApiHandler } from "next";

export interface IResType {
  ok: boolean;
  [key: string]: any;
}

export const withHandler = (
  method: "GET" | "POST" | "DELETE",
  handler: NextApiHandler,
  isPrivate?: boolean
): NextApiHandler => {
  return async (req, res): Promise<any> => {
    if (req.method !== method) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Please Log in" });
    }
    try {
      await handler(req, res);
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        res.status(500).json({ e: e.message });
      } else {
        res.status(500).json({ e: "Internet Server Error" });
      }
    }
  };
};
