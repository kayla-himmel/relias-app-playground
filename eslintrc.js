module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'eslint-comments'],
  rules: {
    'import/no-default-export': 'error',
    'import/no-default-export': 'off',
    'eslint-comments/no-use': 'error',
    "no-nested-ternary": "error",
    "unused-imports/no-unused-imports": "warn",
  },
  ignorePatterns: ['packages/*/coverage'],
};