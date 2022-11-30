import { Meta } from '@storybook/react';

import FacebookIcon from './facebook.svg';
import GoogleIcon from './google.svg';

const iconsCollection = [FacebookIcon, GoogleIcon];

console.log('==== facebook icon:', FacebookIcon);

export default {
  title: 'SVG icons',
} as Meta<typeof FacebookIcon>;

export const Default = {
  render: () => (
    <>
      {iconsCollection.map((Icon) => (
        <Icon key={Icon.key} style={{ width: '20px', height: '20px' }} />
      ))}
      <div className="w-20 h-20 border border-primary-500" />
    </>
  ),
};
