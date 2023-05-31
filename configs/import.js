module.exports = {
  rules: {
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,next*}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{A-Z]*,**/[A-Z]*}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'assets/**}',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
