import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Loading the Deezer SDK --> */}
      <Script src="https://e-cdns-files.dzcdn.net/js/min/dz.js" strategy="beforeInteractive" />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;

declare global {
  interface Window {
    DZ: any;
  }
}
