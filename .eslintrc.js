module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ["off", "windows"],
    "comma-dangle": ["error", "only-multiline"],
    "semi": "off",
    "space-before-function-paren": "off",
    "import/extensions": "off",
    "indent": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "prefer-const": "off",
    "no-plusplus": "off",
    "no-else-return": "off",
    "no-unused-vars": "off",
    "prefer-template": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
