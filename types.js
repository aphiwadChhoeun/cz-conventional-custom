module.exports = {
  types: {
    feat: {
      description: 'A new feature',
      title: 'Features',
      emoji: '💡'
    },
    fix: {
      description: 'A bug fix',
      title: 'Bug Fixes',
      emoji: '🐛'
    },
    refactor: {
      description:
        'A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc)',
      title: 'Code Refactoring',
      emoji: '👷🏼'
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      title: 'Tests',
      emoji: '🔬'
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies (npm, webpack, test config)',
      title: 'Builds',
      emoji: '🛠'
    },
    chore: {
      description: "Other changes that don't fit other type",
      title: 'Misc',
      emoji: '✏️'
    }
  }
};
