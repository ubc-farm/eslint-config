module.exports = {
	"plugins": ["react"],
	"extends": ["plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": { "jsx": true }
	},
	"rules": {
		"jsx-quotes": ["warn", "prefer-single"],
		"react/jsx-boolean-value": ["error", "never"],
		"react/jsx-closing-bracket-location": "error",
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": "error",
		"react/jsx-no-bind": ["error", {
			"ignoreRefs": true,
			"allowArrowFunctions": true
		}],
		"react/jsx-no-undef": ["error"],
		"react/no-danger": "off",
		"react/no-did-mount-set-state": ["error", "allow-in-func"],
		"react/no-string-refs": "error",
		"react/no-unknown-property": "error",
		"react/prefer-es6-class": [2, "always"],
		"react/prefer-stateless-function": "error",
		"react/require-render-return": "error",
		"react/self-closing-comp": "error",
		"react/no-comment-textnodes": "error",
		"react/jsx-space-before-closing": ["error", "always"],
		"react/sort-comp": ["error", {
      "order": [
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],
		"react/wrap-multilines": "error",
		"react/jsx-equals-spacing": [2, "never"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-no-target-blank": "error"
	}
}