import ShoppingCart from '@svg/shopping-cart.svg';
import Image from 'next/image';
import React from 'react';

import DefaultImage from './DefaultImage.png';

export type CardProps = {
  children?: React.ReactNode;
  title?: string;
  price?: number;
  heading?: string;
  picture?: string;
  footer?: React.ReactNode;
};

export const Card = ({
  picture,
  heading,
  title,
  price,
  children,
  footer,
}: CardProps) => {
  if (heading) {
    return (
      <div className="rounded-lg h-64 w-72 shadow-md p-8">
        <div className="flex flex-col justify-between h-full">
          <h1 className="font-bold text-x">{heading}</h1>
          {children}
          {footer}
        </div>
      </div>
    );
  }

  return (
    <div className="w-52 rounded-lg h-64 shadow-md">
      <div className="relative h-40 w-full rounded-t-lg">
        <Image
          src={picture || DefaultImage}
          className="rounded-t-lg"
          fill
          alt={'default photo'}
        />
      </div>
      <div className="flex flex-col py-2 px-4">
        <div className="flex justify-between mb-4">
          <h1 className="font-light text-sm">{title}</h1>
          <ShoppingCart />
        </div>
        <div className="price">
          <p className="font-light text-xl">${price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
