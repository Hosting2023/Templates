import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import Head from 'next/head';

const Header: FC<PropsWithChildren> = ({ children }) => (
  <Head>
    <title>{children}</title>
    <meta
      name="description"
      content="Cleaning"
    />
    <link
      rel="icon"
      href="/favicon.ico"
    />
  </Head>
);

export default Header;
