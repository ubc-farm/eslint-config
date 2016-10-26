# eslint-config-ubc-farm
ESLint configuration for ubc-farm modules.
Includes multiple configurations.

### default
_Modifies `ubc-farm/basic`._
Enables some code for use in generators and restricts CommonJS for Rollup.

### /basic
_Modifies `airbnb-base`._
Turns off some airbnb rules to prevent errors with Rollup and Windows Git code.
Additionally switches from spaces to tabs.

### /react
_Modifies `ubc-farm` and `airbnb`._
Requires **eslint-plugin-react** and **eslint-plugin-jsx-a11y**

Adds the React oriented rules of the full airbnb config and enforces tab usage.

## Installation
```
yarn add ubc-farm/eslint-config eslint@^3.8.1 eslint-plugin-import@^1.14.0
```

