import React from 'react';

import Icon from '../../assets/cartIcon.svg';

// That code is temporary :)

export const Card = (props: any) => (
  <div {...props} className="w-52 rounded-lg shadow-md">
    <div className="image h-48 w-full rounded-t-lg  bg-dark-200"></div>
    <div className="content flex flex-col py-2 px-4">
      <div className="flex justify-between mb-4">
        <p>Modern Picture</p>
        <div className="action">
          <Icon />
        </div>
      </div>
      <div className="price">
        <p className="font-bold">$15.00</p>
      </div>
    </div>
  </div>
);
