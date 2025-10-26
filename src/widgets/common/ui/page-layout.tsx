import React, { PropsWithChildren } from 'react';

export const PageLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className="pt-16 max-w-6xl mx-auto">{children}</div>;
};
