import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <div className="w-full max-w-xl mx-auto border-l border-r border-white">
        <Component {...pageProps} />
      </div>
    </HelmetProvider>
  );
}
