// src/pages/_app.tsx
import "../styles/global.css";  // Ensure this path is correct
import { AppProps } from "next/app";
import Head from "next/head";  // Import Head from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;