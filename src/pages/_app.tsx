import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";

const  App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress
        color="#cce3ff"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App)