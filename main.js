module.exports = {
  stories: ['./src/**/*.stories.*'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
          injectStoryParameters: false,
        },
      },
    },
  ],
  typescript: {
    check: true,
  },
};
