module.exports = {
	"parserOptions": {
		"env": { 
			"es6": true,
			"commonjs": true
		},
		"ecmaFeatures": { "impliedStrict": true	},
		"sourceType": "module"
	},
	"rules": {
		"no-duplicate-imports": "error",
		"global-require": "error",
		"no-new-require": "error",
		"no-useless-rename": "warn"
	}
}