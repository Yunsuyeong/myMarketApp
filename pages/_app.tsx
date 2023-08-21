import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <SWRConfig
        value={{
          fetcher: (url: string) => fetch(url).then((res) => res.json()),
        }}
      >
        <div className="w-full max-w-xl mx-auto border-l border-r border-white">
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </HelmetProvider>
  );
}
