import { NextApiHandler } from "next";

export const withHandler = (
  method: "GET" | "POST",
  handler: NextApiHandler
): NextApiHandler => {
  return async (req, res) => {
    if (req.method !== method) {
      res.status(405).end();
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
