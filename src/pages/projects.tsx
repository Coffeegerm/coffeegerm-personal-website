import styled from "styled-components";
import { Card } from "../components";
import { useFetch } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  flex-direction: row;
`;

const Grid = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  flex: 1;
  flex-basis: 33%;
  flex:-grow: 1;
`;

type GithubProject = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
};

const Projects = () => {
  const {
    data: repos,
    loading,
    error,
  } = useFetch<Array<GithubProject>>(
    "https://api.github.com/users/coffeegerm/repos?per_page=100"
  );

  const shuffledRepos = repos
    ?.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}

      {!loading && error && (
        <div style={{ textAlign: "center" }}>
          <h1>Uh oh :(</h1>
          <p>Looks like we hit a snag. Try that again.</p>
        </div>
      )}

      {!loading && (
        <>
          <p style={{margin: '1rem', textAlign: 'center', fontSize: '1.5rem'}}>
            I am an avid developer outside of work and have been trying to dip
            my toes into open source work more and more. Here are the projects
            that can be found on my GitHub.
          </p>
          <Grid>
            {shuffledRepos?.map((repo) => (
              <GridItem key={repo.id}>
                <Card
                  onClick={() => {
                    window.open(repo.html_url, "_blank");
                  }}
                >
                  <Card.Header>{repo.name}</Card.Header>
                  <p>{repo.description}</p>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Projects;
