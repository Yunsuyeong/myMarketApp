import "@/styles/globals.css";
import useUser from "@/utils/client/useUser";
import type { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import { SWRConfig } from "swr";

const UserCheck = () => {
  const { user } = useUser();
  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <SWRConfig
        value={{
          fetcher: (url: string) => fetch(url).then((res) => res.json()),
        }}
      >
        <div className="w-full max-w-xl mx-auto border-l border-r border-white">
          <UserCheck />
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </HelmetProvider>
  );
}
