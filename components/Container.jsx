import React from 'react';
import clsx from 'clsx';
const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  );
};

export default Container;
