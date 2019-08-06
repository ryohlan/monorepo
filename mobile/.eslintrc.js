module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: '.',
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/prefer-interface': [0],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type']
  }
}
