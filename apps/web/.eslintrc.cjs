module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended", "airbnb/hooks", "custom"],
  ignorePatterns: ["dist/**/*"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/button-has-type": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
