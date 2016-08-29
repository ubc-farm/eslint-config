
## Installation
```
npm install -g ubc-farm/eslint-config eslint-config-airbnb@^10.0.1 eslint@^3.4.0 eslint-plugin-jsx-a11y@^2.2.0 eslint-plugin-import@^1.14.0 eslint-plugin-react@^6.2.0
```

## Global usage
*for other ubc-farm modules*

### Command Line
globalconfig.json
```json
{ "extends": "notwoods" }
```

```
eslint -c globalconfig.json myfiletotest.js
```

### Node.js API
```javascript
const options = {
	"baseConfig": { "extends": "notwoods" }
}
```
