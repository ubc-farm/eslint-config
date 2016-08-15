module.exports = {
	"env": { "es6": true },
	"rules": {
		"arrow-body-style": "warn",
		"arrow-parens": ["warn", "as-needed"],
		"object-shorthand": ["warn", "always", {
			"avoidQuotes": true
		}],
		"prefer-arrow-callback": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"rest-spread-spacing": "warn"
	}
}