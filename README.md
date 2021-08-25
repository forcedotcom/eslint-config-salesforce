# `eslint-config-salesforce-typescript`

Salesforce eslint configuration for all projects.

## Usage

First install this package.

```bash
yarn add eslint-config-salesforce
```

Then extend this configuration in your own eslint file.

Here is an example using a `.eslintrc.js` file.

```javascript
module.exports = {
  extends: ['eslint-config-salesforce'],
};
```

Because eslint requires all eslint packages locally, you must also install the following packages.

```bash
yarn add eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-jsdoc
```

For Salesforce owned repositories, also extend [eslint-config-salesforce-license](https://www.npmjs.com/package/eslint-config-salesforce-license);

**Note:** For typescript packages, use [eslint-config-salesforce-typescript](https://www.npmjs.com/package/eslint-config-salesforce-typescript).
