// src/pages/_app.tsx
import "../styles/global.css";  // Ensure this path is correct
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
