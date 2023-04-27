import React from 'react';
import type { Preview } from '@storybook/react';
import StyleProvider from '../src/styles/StyleProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StyleProvider>
        <Story />
      </StyleProvider>
    ),
  ],
};

export default preview;
