module.exports = {
  env: {
    node: true,
  },
  extends: ["custom"],
  overrides: [],
  ignorePatterns: ["dist/**/*"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "no-console": "off",
  },
};
