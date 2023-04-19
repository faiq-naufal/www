/** @type {import('@types/prettier').Options} */
module.exports = {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	plugins: [require('prettier-plugin-astro')],
	pluginSearchDirs: false,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
