import type { Meta, StoryObj } from '@storybook/react';

import { Juice as JuiceComponent } from './Juice';

const meta = {
  title: 'Components/Juice',
  component: JuiceComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof JuiceComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headline: 'test',
  },
};
