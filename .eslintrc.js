module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["react", "@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
};
