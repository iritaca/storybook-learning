import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs:{
    autodocs:true, // Automatically generates docs pages from your component metadata (like props,types, and comments)
  }
};
export default config;