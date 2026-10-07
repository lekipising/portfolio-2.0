import React from "react";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "../styles/index.css";
export default function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            const worker =
              registration.active ||
              registration.waiting ||
              registration.installing;
            if (worker && new URL(worker.scriptURL).pathname === "/sw.js")
              registration.unregister();
          });
        })
        .catch(() => {});
    }
  }, []);
  return (
    <>
      <Head>
        <title>Liplan Lekipising | Senior Software Engineer</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <MotionConfig reducedMotion="user">
        <Component
          key={`${router.pathname}:${router.query.slug || ""}`}
          {...pageProps}
        />
      </MotionConfig>
      <Analytics />
    </>
  );
}
