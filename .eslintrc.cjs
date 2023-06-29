module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['vite.config.ts'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-fragments': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-restricted-exports': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
