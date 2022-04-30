import type { AppProps } from "next/app";
import { NavBar } from "../components";
import "../styles/globals.css";
import styled from "styled-components";

const Layout = styled.div`
  margin-top: 50px;
  max-width: 1080px;
  display: flex;
  flex: 1;
  justify-content: center;
  justify-self: center;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
