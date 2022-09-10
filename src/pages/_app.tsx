import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Loading the Deezer SDK --> */}
      <script src="https://e-cdns-files.dzcdn.net/js/min/dz.js" async />

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
