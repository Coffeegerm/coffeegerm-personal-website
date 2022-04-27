import Link from "next/link";
import { CSSProperties } from "react";

const navStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  padding: "1rem 0",
  backgroundColor: 'black'
};

const groupedItemsStyle: CSSProperties = {
  flex: 1,
  marginRight: "2rem",
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
};

export const NavBar = () => (
  <nav style={navStyle}>
    <div style={groupedItemsStyle}>
      <Link href="/projects">Projects</Link>
      <Link href="/uses">Uses</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </div>

    <div style={{ flex: 1, textAlign: "center" }}>
      <Link href="/" passHref={true}>
        Coffeegerm
      </Link>
    </div>

    <div style={{ flex: 1, textAlign: "center" }}>
      <Link href="https://twitter.com/coffeegerm">Twitter</Link>
    </div>
  </nav>
);
