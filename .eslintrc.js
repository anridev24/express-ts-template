module.exports = {
  parser: '@typescript-eslint/parser',
  project: 'tsconfig.json',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: { browser: true, es2021: true, node: true },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'sort-imports-es6-autofix',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Conflict with sort-imports-es6 plugin
    'import/order': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // For Typescript, it is better not to use default export: https://stackoverflow.com/a/33307487/11440474
    'import/prefer-default-export': 'off',
    // Conflict with alias path
    'import/extensions': 'off',
    // Allow using typescript namespaces
    '@typescript-eslint/no-namespace': 'off',
    'no-constructor-return': 'off',
  },
};
