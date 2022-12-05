import { Meta } from '@storybook/react';

import FacebookIcon from './facebook.svg';
import GoogleIcon from './google.svg';

const iconsCollection2: {
  Component: any;
  name: string;
}[] = [
  {
    Component: FacebookIcon,
    name: 'facebook.svg',
  },
  {
    Component: GoogleIcon,
    name: 'google.svg',
  },
];

export default {
  title: 'SVG icons',
} as Meta;

export const Default = {
  render: () => (
    <div className="wrapper">
      {iconsCollection2.map(({ Component, name }) => (
        <div key={Component.key} className="item">
          <Component className="icon" />
          <span className="label">{name}</span>
        </div>
      ))}
      {/* We're using inline CSS here because Tailwind
        classes won't work in Stories not coupled with
        specific component */}
      <style jsx>
        {`
          .wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
          }
          .item {
            display: flex;
            gap: 8px;
            flex-direction: column;
            align-items: center;
          }
          .icon {
            width: 64px;
            height: 64px;
          }
          .label {
            font-size: 0.75rem;
          }
        `}
      </style>
    </div>
  ),
};
