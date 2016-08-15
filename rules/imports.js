module.exports = {
	"env": { "es6": true },
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"plugins": ["import"],
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".json"]
			}
		}
	},
	"rules": {
		"import/no-unresolved": ["error", {"commonjs": true}],
		"import/named": "error",
		"import/default": "error",
		"import/namespace": ["error", {"allowComputed": true}],
		"import/export": "error",
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "error",
		"import/no-deprecated": "warn",
		"import/no-extraneous-dependencies": "error",
		"import/no-mutable-exports": "error",
		"import/no-commonjs": "error",
		"import/no-amd": "error",
		"import/imports-first": ["error", "absolute-first"],
		"import/order": "error",
		"import/newline-after-import": "error",
		"import/prefer-default-export": "error"
	}
}