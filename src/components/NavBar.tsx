import Link from "next/link";

export const NavBar = () => (
  <nav
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      padding: "1rem 0",
    }}
  >
    <div
      style={{
        flex: 1,
        marginRight: "2rem",
        display: "flex",
        justifyContent: "space-around",
        textAlign: 'center',
      }}
    >
      <Link href="/projects">Projects</Link>
      <Link href="/uses">Uses</Link>
      <Link href="/employment">Employment</Link>
      <a>Blog</a>
    </div>

    <div style={{ flex: 1, textAlign: 'center' }}>
      <Link href="/" passHref={true}>
        Coffeegerm
      </Link>
    </div>

    <div style={{ flex: 1, textAlign: 'center' }}>
      <Link href="/">Twitter</Link>
    </div>
  </nav>
);
