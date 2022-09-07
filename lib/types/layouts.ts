import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type Layout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
