module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],
}
