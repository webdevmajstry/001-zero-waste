import { Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Default = {
  render: () => <Button>Click me</Button>,
};
