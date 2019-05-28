module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 1,
    'no-unused-vars': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'space-unary-ops': 2,
    'space-infix-ops': 2,
    'space-before-function-paren': 2,
    'space-before-blocks': 2
  },
  globals: {
    getApp: false,
    Page: false,
    wx: false,
    App: false,
    getCurrentPages: false,
    Component: false
  }
};
