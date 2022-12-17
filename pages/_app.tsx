import { AppProps } from "next/app";
import "../styles/index.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://wow.zamimg.com/js/tooltips.js" />
      <Component {...pageProps} />
    </>
  );
}
