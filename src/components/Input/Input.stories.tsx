import { Meta, Story } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      type: {
        name: 'string',
      },
      defaultValue: 'label',
    },
    placeholder: {
      type: {
        name: 'string',
      },
      defaultValue: 'placeholder',
    },
  },
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});
