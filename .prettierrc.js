module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: 'src/tldSave/tldParser/**.ts',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: 'src/tldSave/availableItems.ts',
      options: {
        printWidth: 150,
      },
    },
  ],
};
