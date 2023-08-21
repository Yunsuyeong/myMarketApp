import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookie = {
  cookieName: "mymarket",
  password: process.env.SESSION_PASSWORD!,
};

export const withAPISession = (handler: any) => {
  return withIronSessionApiRoute(handler, cookie);
};
