import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#011627" />
          {/* Meta Description = Search Engines, OG Descriptions = Social media */}
          {/* og meta */}
          <meta property="og:title" content="Liplan Lekipising - Portfolio" />
          <meta
            property="og:url"
            content="https://lekipising-portfolio.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta
            name="description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:domain"
            content="https://lekipising-portfolio.vercel.app/"
          />
          <meta
            property="twitter:url"
            content="https://lekipising-portfolio.vercel.app/"
          />
          <meta name="twitter:creator" content="@lekipising" />
          <meta name="twitter:title" content="Liplan Lekipising - Portfolio" />
          <meta
            name="twitter:description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
          />
          {/* pwa tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Liplan Lekipising - Portfolio"
          />
          <meta
            name="description"
            content="Where the world connects with future talent"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="application-name"
            content="Liplan Lekipising - Portfolio"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#011627" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {
            // TODO: add iOS splash screens
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
