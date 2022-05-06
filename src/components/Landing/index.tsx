import { Card, WorkHistory } from "../../components";
import styled from "styled-components";
import Button from "../Button";
import { useFetch } from "../../hooks";
import { useMemo } from "react";
import { breakpoints } from "../../theme";

const Container = styled.div`
  margin: 4rem;
  flex: 1;
  section {
    margin: 20rem 0;
  }

  section:nth-child(1) {
    @media ${breakpoints.laptop} {
      margin: 15rem 0 40rem 50px;
    }
  }

  section:nth-child(2) {
    @media ${breakpoints.laptop} {
      margin-left: 100px;
    }
  }

  section:nth-child(3) {
    @media ${breakpoints.laptop} {
      margin-left: 300px;
    }
  }
`;

const SectionHeader = styled.h1`
  overflow: hidden;

  &:after {
    background-color: #8bbbb2;
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

const HeroContainer = styled.section`
  p {
    color: #9bc4bc;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
    color: #8892af;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <p>Greetings! I am</p>
      <h1>David Yarzebinski</h1>
      <h3>I am a full stack engineer.</h3>
      <p>
        Over the last few years I have worked with companies to build great
        software for web, servers, and mobile applications. Currently building a
        mobile app to help you and your teams increase engagement and make working remotely easier at
        Pingboard.
      </p>
    </HeroContainer>
  );
}

const AboutSectionContainer = styled.section`
  @media ${breakpoints.laptop} {
    margin: 0 60px;
    max-width: 600px;
  }

  margin-left: 60px;

  p {
    font-size: 1.5rem;
  }
`;

function AboutSection() {
  return (
    <AboutSectionContainer>
      <SectionHeader>About Me</SectionHeader>
      <p>
        Hello! My name is David and I&apos;ve been a tinkerer my entire life.
        From taking toys apart to modding minecraft, I have always had an
        interest in how things work and creating things myself. Becoming a
        developer wasn&apos;t ever a question for me. I found Javascript and
        took off running with it.
      </p>

      <p>
        These days my code is a little cleaner and I&apos;ve had the chance to
        work with some amazing people in the contracting space as well as a car
        selling business, CarLotz. Recently I&apos;ve been making an effort to
        take steps towards writing and contributing to open source projects when
        I have time not helping build Pingboard!
      </p>
    </AboutSectionContainer>
  );
}

const WorkSectionContainer = styled.section`
  @media ${breakpoints.laptop} {
    width: 600px;
  }
`;

function WorkSection() {
  return (
    <WorkSectionContainer>
      <SectionHeader>Places my code lives</SectionHeader>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WorkHistory />
      </div>
    </WorkSectionContainer>
  );
}

type GithubProject = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
};

function ReposSection() {
  const {
    data: repos,
    loading,
    error,
  } = useFetch<Array<GithubProject>>(
    "https://api.github.com/users/coffeegerm/repos?per_page=100"
  );

  const sixProjectsToShow = useMemo(
    // shuffle array and get first 6 elements
    () => repos?.sort(() => 0.5 - Math.random()).slice(0, 6),
    [repos]
  );

  return (
    <section>
      <SectionHeader>{`Thing's I've built (or currently building)`}</SectionHeader>
      <div style={{ display: "flex", flex: 3, flexDirection: "column" }}>
        {sixProjectsToShow?.map((repo) => (
          <div key={repo.id} style={{ flex: 1 }}>
            <Card
              key={repo.id}
              onClick={() => {
                window.open(repo.html_url, "_blank");
              }}
            >
              <Card.Header>{repo.name}</Card.Header>
              <Card.Content>
                {repo.description || `No description available`}
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

const ContactSectionContainer = styled.section`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

function ContactSection() {
  return (
    <ContactSectionContainer>
      <h1>Ok, now what?</h1>
      <h1 style={{ fontSize: "3rem" }}>Reach out</h1>
      <p style={{ maxWidth: "480px" }}>
        While not currently looking for a new role I am always open to talk
        about coffee, code, a good game, music, or a new book.
      </p>
      <Button><a href="mailto:dyarzebinski97@gmail.com">Connect</a></Button>
    </ContactSectionContainer>
  );
}

export default function Landing() {
  return (
    <Container>
      <Hero />
      <AboutSection />
      <WorkSection />
      <ReposSection />
      <ContactSection />
    </Container>
  );
}
