module.exports = {
  types: {
    feat: {
      description: 'A new feature',
      title: 'Features'
    },
    fix: {
      description: 'A bug fix',
      title: 'Bug Fixes'
    },
    refactor: {
      description:
        'A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc)',
      title: 'Code Refactoring'
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      title: 'Tests'
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies (npm, webpack, test config)',
      title: 'Builds'
    },
    chore: {
      description: "Other changes that don't fit other type",
      title: 'Misc'
    }
  }
};
