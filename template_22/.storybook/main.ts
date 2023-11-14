import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src/*'),
        '@/public/*': path.resolve(__dirname, '../public/*'),
        '@/components/*': path.resolve(__dirname, 'components/*'),
        '@/components/lips': path.resolve(__dirname, 'components/lips'),
        '@/types/*': path.resolve(__dirname, 'types/*'),
        '@styles/*': path.resolve(__dirname, 'styles/*'),
        '@/store/*': path.resolve(__dirname, 'store/*'),
        '@/hooks/*': path.resolve(__dirname, 'hooks/*'),
        '@/utils/*': path.resolve(__dirname, 'constants/*'),
        '@/assets/*': path.resolve(__dirname, 'public/assets/*'),
      },
    },
  }),
};
export default config;
