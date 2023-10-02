import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: Props) => {
  return (
    <div className={`mx-auto my-0 max-w-[1400px] w-full px-5 ${className} `}>
      {children}
    </div>
  );
};
