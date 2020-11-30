module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-empty-pattern": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "no-console": 0,
    "no-undef": 1,
    "react/no-unescaped-entities": 1,
  },
};
