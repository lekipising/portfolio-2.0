import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import Head from "next/head";

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Liplan Lekipising - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
