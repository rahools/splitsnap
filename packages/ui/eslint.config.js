import baseConfig from "@splitsnap/eslint-config/base";
import reactConfig from "@splitsnap/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
