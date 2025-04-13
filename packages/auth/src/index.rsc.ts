import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { toNextJsHandler } from "better-auth/next-js";

import type { Session, User } from "@splitsnap/db/schema";
import { db } from "@splitsnap/db/client";

import { env } from "../env";

export type SessionWithUser = Session & {
  user: User;
};

export const validateToken = async (
  token: string,
): Promise<SessionWithUser | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await db.query.session.findFirst({
    where: (session, { eq }) => eq(session.token, sessionToken),
    with: {
      user: true,
    },
  });
  return session
    ? session
    : null;
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true
  }
})

export const baseAuthUrl = env.AUTH_URL ? `https://${env.AUTH_URL}` : `http://localhost:${process.env.PORT ?? 3000}`;

export const nextJsHandler = toNextJsHandler(auth);
export const nitroHandler = auth.handler;
