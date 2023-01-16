module.exports = {
  env: {
    node: true,
  },
  extends: ["custom"],
  overrides: [],
  ignorePatterns: ["dist/**/*"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "no-console": "off",
  },
};
