import { Meta, Story } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      type: {
        name: 'string',
      },
      defaultValue: 'Modern Picture',
    },
    optionalPicture: {
      type: {
        name: 'string',
      },
      defaultValue: '',
    },
    price: {
      defaultValue: 15,
      type: {
        name: 'number',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
