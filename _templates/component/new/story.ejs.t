---
to: src/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.stories.tsx
unless_exists: true
sh: pnpm prettier --write "src/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/*"
---

import type { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascal(h.path.basename(name)) %> as <%= h.changeCase.pascal(h.path.basename(name)) %>Component } from './<%= h.changeCase.pascal(h.path.basename(name)) %>';

const meta = {
    title: 'Components/<%= h.changeCase.pascal(h.path.basename(name)) %>',
    component: <%= h.changeCase.pascal(h.path.basename(name)) %>Component,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof <%= h.changeCase.pascal(h.path.basename(name)) %>Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'test',
    },
};