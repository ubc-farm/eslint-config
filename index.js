module.exports = {
	"extends": "airbnb",
	"env": {
		"browser": true
	},
	"rules": {
		// Using tabs for indents, not spaces
		"indent": ["warn", "tab"],
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-indent-props": ["warn", "tab"],

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