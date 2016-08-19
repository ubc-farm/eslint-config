module.exports = {
	"extends": "airbnb",
	"env": {
		"browser": true
	},
	"rules": {
		// Using tabs for indents, not spaces
		"indent": ["warn", "tab", {
			SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1
		}],
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-indent-props": ["warn", "tab"],

		// For...in loops should be allowed
		'no-restricted-syntax': [
			"error",
			'DebuggerStatement',
			'LabeledStatement',
			'WithStatement',
		],
		// continue is allowed
		"no-continue": "off",
		// finally returns are used in generators
		"no-unsafe-finally": "off",
		// allow constant conditions for generator loops
		"no-constant-condition": ["warn", {checkLoops: false}],

		"linebreak-style": "off",
		// Since rollup is used to bundle in dependencies,
		// some files will be imported from devDependencies.
		"import/no-extraneous-dependencies": ["error", {
			"devDependencies": true
		}],
		// Avoid using the jsx extension to maintain consistent
		// filenames between the source and compiled files, especially for imports.
		"react/jsx-filename-extension": ["error", { "extensions": [".js"] }]
	}
}