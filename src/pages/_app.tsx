import type { AppProps } from "next/app";
import { NavBar } from "../components";
import "../styles/globals.css";
import styled from "styled-components";

const Layout = styled.div`
  margin-top: 50px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
