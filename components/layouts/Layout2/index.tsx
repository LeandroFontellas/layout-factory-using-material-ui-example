import React from 'react';
import { Layout } from '#lib/types/layouts';

export const Layout2Component: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="bg-pink-900 m-32 text-white">{children}</div>;
};

export const Layout2: Layout = page => {
  return <Layout2Component>{page}</Layout2Component>;
};
