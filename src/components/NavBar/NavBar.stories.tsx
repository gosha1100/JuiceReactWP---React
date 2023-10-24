import type { Meta, StoryObj } from '@storybook/react';

import { NavBar as NavBarComponent } from './NavBar';

const meta = {
  title: 'Components/NavBar',
  component: NavBarComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof NavBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    menu: [
      {
        id: 1,
        title: 'About',
        url: 'https://example.com/about',
      },
      {
        id: 2,
        title: 'Juicy',
        url: 'https://example.com/contact',
      },
      {
        id: 3,
        title: 'Juicer',
        url: 'https://example.com/contact',
        items: [
          {
            id: 5,
            title: 'Juice',
            url: 'https://example.com/contact',
          },

          {
            id: 6,
            title: 'Juice',
            url: 'https://example.com/contact',
          },

          {
            id: 7,
            title: 'Juice',
            url: 'https://example.com/contact',
          },
        ],
      },
      {
        id: 4,
        title: 'Juice',
        url: 'https://example.com/contact',
      },
    ],
  },
};
