import { Meta } from '@storybook/react';

import Input from './Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

export const Default = {
  render: () => (
    <>
      <h1>{'email:'}</h1>
      <input placeholder={'Type your email'}></input>
      <p>{'Please provide valid email address'}</p>
    </>
  ),
};
