import type { AppProps } from "next/app";
import Head from "next/head";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#120f27" />
      </Head>
      <InteractiveBackground />
      <Component {...pageProps} />
    </>
  );
}
