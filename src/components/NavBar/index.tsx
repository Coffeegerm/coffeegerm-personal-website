import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  justify-content: flex-end;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 6rem 1rem 0;
  background-color: #203046;

  a {
    margin: 0 1rem;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Link href="/" passHref={true}>
        Home
      </Link>
      <Link href="/projects">Projects</Link>
      <Link href="/uses">Uses</Link>
      <Link href="/blog">Blog</Link>
    </Nav>
  );
}
