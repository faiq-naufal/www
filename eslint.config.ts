import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginTailwindCSS.configs['flat/recommended'],
  {
    files: ['**/*.{astro,ts,js,mjs}'],
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
      'tailwindcss/no-custom-classname': ['off'],
    },
    ignores: [
      '*', // Ignore everything except the following
      '!public/',
      '!src/',
      '!tsconfig.json',
      '!astro.config.ts',
      '!eslint.config.ts',
      '!prettier.config.js',
    ],
  },
  eslintPluginPrettierRecommended,
);
