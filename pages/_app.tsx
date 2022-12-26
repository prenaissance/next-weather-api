import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@components/ui/RootLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
