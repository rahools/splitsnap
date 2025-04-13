import { defineEventHandler, toWebRequest } from "h3";

import { nitroHandler } from "@splitsnap/auth/server";

export default defineEventHandler((event) => {
  return nitroHandler(toWebRequest(event));
});
