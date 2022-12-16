import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import Head from "next/head";

// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Liplan Lekipising - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
