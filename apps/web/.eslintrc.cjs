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
  ignorePatterns: ["dist/**/*"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/button-has-type": 0,
  },
};
