import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "50px" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
