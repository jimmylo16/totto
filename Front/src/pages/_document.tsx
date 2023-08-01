import { Footer } from "@/components/Layout/Footer";
import { Navbar } from "@/components/Layout/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <Navbar />
      <body className="h-fit">
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
