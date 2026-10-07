import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#010C15" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta property="og:site_name" content="Liplan Lekipising" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_KE" />
          <meta
            property="og:image"
            content="https://lekipising.com/social-card.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@lekipising" />
          <meta
            name="twitter:image"
            content="https://lekipising.com/social-card.png"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
