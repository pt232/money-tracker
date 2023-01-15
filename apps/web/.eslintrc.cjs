module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb/hooks",
    "custom",
  ],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
