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
    background-color: #8BBBB2;
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

function AboutSection() {
  return (
    <section>
      <SectionHeader>About Me</SectionHeader>
      <p>Hello</p>
      <h1>My name is David.</h1>
    </section>
  );
}

function WorkSection() {
  return (
    <section>
      <SectionHeader>Places my code lives</SectionHeader>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WorkHistory />
      </div>
    </section>
  );
}

function ReposSection() {
  return (
    <section>
      <SectionHeader>{`Thing's I've built`}</SectionHeader>
    </section>
  );
}

export default function Landing() {
  return (
    <Container>
      <AboutSection />
      <WorkSection />
      <ReposSection />
    </Container>
  );
}
