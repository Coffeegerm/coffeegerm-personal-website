import { WorkHistory } from "../../components";
import styled from "styled-components";

const Container = styled.div`
  margin: 4rem;
  section {
    margin: 20rem 0;
  }
`;

const SectionHeader = styled.h1`
  overflow: hidden;

  &:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
    left: 0.5em;
    margin-right: -50%;
  }
`;

export default function Landing() {
  return (
    <Container>
      <section>
        <SectionHeader>About Me</SectionHeader>
        <p>Hello</p>
        <h1>My name is David.</h1>
      </section>

      <section>
        <SectionHeader>Places my code lives</SectionHeader>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WorkHistory />
        </div>
      </section>

      <section>
        <SectionHeader>{`Thing's I've built`}</SectionHeader>
      </section>
    </Container>
  );
}
