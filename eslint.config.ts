import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,mjs,ts}',],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
      '@typescript-eslint/no-non-null-assertion': ['warn'],
      '@typescript-eslint/no-unsafe-return': ['warn'],
      '@typescript-eslint/no-unsafe-argument': ['warn'],
    },
    ignores: [
      "/*", // Ignore everything except the following
      "!public/",
      "!src/",
      "!tsconfig.json",
      "!astro.config.ts",
      "!eslint.config.ts",
      "!prettier.config.js",
  ]
  },
  eslintPluginPrettierRecommended,
);
