# eslint-config-stlato

[![npm version](https://badge.fury.io/js/eslint-config-stlato.svg)](https://badge.fury.io/js/eslint-config-stlato)

A sharable ESLint config for stlato

## Install

```sh
yarn add --dev eslint prettier typescript react // install peerDependencies
yarn add --dev eslint-config-stlato
```

## How to use

Add a following `.eslintrc.js` in your project.

```js
module.exports = {
  extends: 'stlato',
};
```

Run `eslint`!

```sh
yarn eslint 'src/**/*.{js,jsx,ts,tsx}'
```
# eslint-config-stlato
