import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App)