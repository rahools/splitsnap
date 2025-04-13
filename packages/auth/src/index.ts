import { createAuthClient } from "better-auth/react";

import type { Session, User } from "@splitsnap/db/schema";

import { env } from "../env";

export type SessionWithUser = Session & {
  user: User;
};

export const baseAuthUrl = env.NEXT_PUBLIC_AUTH_URL
  ? `https://${env.NEXT_PUBLIC_AUTH_URL}`
  : `http://localhost:${process.env.PORT ?? 3000}`;

export const authClient = createAuthClient({
  baseURL: baseAuthUrl, // the base url of your auth server
});
