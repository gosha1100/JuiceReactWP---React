import type { Meta, Story } from '@storybook/react';

import { NavBar, Props } from './NavBar';

const meta: Meta<Props> = {
  title: 'Components/NavBar',
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  args: {
    image: 'https://via.placeholder.com/150',
  },
  tags: ['autodocs'],
};

const Template: Story<Props> = (args) => <NavBar {...args} />;

export const NavBarStory = Template.bind({});
NavBarStory.args = {};

export default meta;
