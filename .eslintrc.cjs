/**
 * Adapted from https://ota-meshi.github.io/eslint-plugin-astro/user-guide/.
 */

module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-strict",
  ],
  overrides: [
    {
      // Define the configuration for `.astro` files.
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      // Parse the scripts in `.astro` files as TypeScript.
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
      },
      rules: {
        // Override or add rule settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
};
