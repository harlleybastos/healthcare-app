import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
