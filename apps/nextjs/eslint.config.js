import baseConfig, { restrictEnvAccess } from "@splitsnap/eslint-config/base";
import nextjsConfig from "@splitsnap/eslint-config/nextjs";
import reactConfig from "@splitsnap/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
