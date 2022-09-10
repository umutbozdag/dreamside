import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Loading the Deezer SDK --> */}
      <Head>
        <script src="https://e-cdns-files.dzcdn.net/js/min/dz.js" />
      </Head>
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
