/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
  ignorePatterns: ['node_modules', 'dist'],
}
