# Airbnb ESLint configuration for ESLint v9

It is a temporary package that provides the Airbnb ESLint configuration for ESLint v9. Follow [issue](https://github.com/airbnb/javascript/issues/2961) for updates.

## Installation

Install package to include the Airbnb ESLint configuration:

```shell
npm i -D github:revenkroz/eslint-config-airbnb-base-eslint9
```

## Example usage

In your `eslint.config.mjs` (or other config) file you can import and use the Airbnb ESLint configuration like this:

```javascript
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import airbnbPlugin from 'eslint-config-airbnb-base-eslint9'

// use `tseslint.config` if you are using TypeScript in project
export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...airbnbPlugin,
  // ...
)
```
