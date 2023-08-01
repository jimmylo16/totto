import { GlobalProvider } from "@/components/GlobalProvider";
import { Layout } from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  );
}
