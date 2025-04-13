"use client";

import { useSuspenseQuery, useQueryClient } from "@tanstack/react-query";

import { authClient } from "@splitsnap/auth";
import { Button } from "@splitsnap/ui/button";

import { useTRPC } from "~/trpc/react";

export function AuthShowcase() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: session } = useSuspenseQuery(
    trpc.auth.getSession.queryOptions(),
  );

  if (!session) {
    return (
      <>
        <div>
          <Button
            size="lg"
            onClick={async () => {
              await authClient.signUp.email({
                email: "contact@rahools.com",
                password: "super-secret-password",
                name: "test",
                image: "https://example.com/image.png",
              });
              queryClient.invalidateQueries(trpc.auth.pathFilter())
            }}
          >
            Sign Up ASD
          </Button>
        </div>
        <div>
          <Button
            size="lg"
            onClick={async () => {
              await authClient.signIn.email({
                email: "contact@rahools.com",
                password: "super-secret-password",
              });
              queryClient.invalidateQueries(trpc.auth.pathFilter())
            }}
          >
            Sign In ASD
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {session.user.name}</span>
      </p>

      <Button
        size="lg"
        onClick={async () => {
          await authClient.revokeSession({
            token: session.session.token,
          });
          queryClient.invalidateQueries(trpc.auth.pathFilter())
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
