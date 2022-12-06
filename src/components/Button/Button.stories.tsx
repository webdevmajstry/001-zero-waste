import { Meta, Story } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Zaloguj sie',
      name: 'text inside button',
      type: {
        name: 'string',
      },
    },
    variant: {
      options: ['small', 'default', 'large'],
      control: { type: 'radio' },
      defaultValue: 'default',
      type: {
        name: 'string',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
