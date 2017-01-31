# eslint-config
ESLint configuration for ubc-farm modules.
Includes multiple configurations, based on eslint-config-airbnb.
Most style rules have been switched to warnings or turned off.

### /index.js
Enables some code for use in generators and restricts CommonJS for Rollup.

### /react
Requires **eslint-plugin-react** and **eslint-plugin-jsx-a11y**

Adds the React oriented rules of the full airbnb config and enforces tab usage.

## Installation
```
yarn add @ubc-farm/eslint-config eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

## usage
```yaml
---
  extends: '@ubc-farm/eslint-config'
```
