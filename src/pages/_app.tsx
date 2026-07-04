import type { AppProps } from "next/app";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <InteractiveBackground />
      <Component {...pageProps} />
    </>
  );
}
