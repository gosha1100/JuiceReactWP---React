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
    image: 'https://via.placeholder.com/150',
    menu: {
      items: [
        {
          id: 1,
          title: 'Menu Item 1',
          url: '#',
          items: [
            {
              id: 1,
              title: 'Sub Menu Item 1',
              url: '#',
            },
            {
              id: 2,
              title: 'Sub Menu Item 2',
              url: '#',
            },
          ],
        },
        {
          id: 2,
          title: 'Menu Item 2',
          url: '#',
          items: [
            {
              id: 1,
              title: 'Sub Menu Item 1',
              url: '#',
            },
            {
              id: 2,
              title: 'Sub Menu Item 2',
              url: '#',
            },
          ],
        },
        {
          id: 3,
          title: 'Menu Item 3',
          url: '#',
          items: [
            {
              id: 1,
              title: 'Sub Menu Item 1',
              url: '#',
            },
            {
              id: 2,
              title: 'Sub Menu Item 2',
              url: '#',
            },
          ],
        },
      ],
    },
  },
};
