import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#011627" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="https://res.cloudinary.com/dpnbddror/image/upload/c_scale,f_auto,h_800/v1697208403/liplan/v4_x34zg3.jpg"
            as="image"
          />
          {/* Meta Description = Search Engines, OG Descriptions = Social media */}
          {/* og meta */}
          <meta
            property="og:title"
            content="Liplan Lekipising - Software Engineer"
          />
          <meta property="og:site_name" content="Liplan Lekipising Portfolio" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="https://lekipising.com" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dpnbddror/image/upload/c_scale,w_1200/v1697209158/liplan/Screenshot_from_2023-10-13_17-59-04_vzuiqg.png"
          />
          <meta property="og:type" content="summary" />
          <link rel="canonical" href="https://lekipising.com" />
          <meta
            property="og:description"
            content="I craft interactive and beautiful web apps, and I love what I do. With every line of code, I strive to make the web a better place. View my projects"
          />
          <meta
            name="description"
            content="I craft interactive and beautiful web apps, and I love what I do. With every line of code, I strive to make the web a better place. View my projects"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://lekipising.com" />
          <meta property="twitter:url" content="https://lekipising.com" />
          <meta name="twitter:creator" content="@lekipising" />
          <meta
            name="twitter:title"
            content="Liplan Lekipising - Software Engineer"
          />
          <meta
            name="twitter:description"
            content="I craft interactive and beautiful web apps, and I love what I do. With every line of code, I strive to make the web a better place. View my projects"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dpnbddror/image/upload/c_scale,w_1200/v1697209158/liplan/Screenshot_from_2023-10-13_17-59-04_vzuiqg.png"
          />
          {/* pwa tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Liplan Lekipising - Software Engineer"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="application-name"
            content="Liplan Lekipising - Software Engineer"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#011627" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
