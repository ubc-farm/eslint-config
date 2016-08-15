module.exports = {
	"env": {
		"browser": true,
		"worker": true,
		"serviceworker": true
	},
	"extends": [
		"eslint:recommended", 
		"./rules/errors.js",
		"./rules/es6.js",
		"./rules/imports.js",
		"./rules/modules.js",
		"./rules/node.js",
		"./rules/react.js",
		"./rules/variables.js"
	],
	"installedESLint": true,
	"rules": {
		"indent": ["warn",	"tab", {"SwitchCase": 1}],
		"quotes": ["error",	"single",
			{"allowTemplateLiterals": true}
		],
		"semi": "off"
	}
}