/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  overrides: [
		{
			files: ['*.astro', '**/*.astro'],
			customSyntax: 'postcss-html',
		},
	],
  rules: {
    'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
    'color-function-notation': 'modern',
    'value-no-vendor-prefix': null
  },
  ignoreFiles: [
    'node_modules/**',
    'dist/**',
    'src/styles/reset.css'
  ],
  ignorePatterns: ['node_modules', 'dist'],
}
