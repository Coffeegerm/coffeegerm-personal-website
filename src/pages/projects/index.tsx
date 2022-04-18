import { useEffect, useState } from "react";
import styles from "./projects.module.css";

type GithubProject = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
};

const Projects = () => {
  const [repos, setRepos] = useState<Array<GithubProject>>([]);
  const [loading, setLoading] = useState<undefined | boolean>(undefined);
  const [error, setError] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/coffeegerm/repos?per_page=100")
      .then((res) => res.json())
      .then(setRepos)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const shuffledRepos = repos
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
      {loading && <h1>Loading...</h1>}

      {!loading && error && (
        <div style={{ textAlign: "center" }}>
          <h1>Uh oh :(</h1>
          <p>Looks like we hit a snag. Try that again.</p>
        </div>
      )}

      {!loading &&
        shuffledRepos?.map((repo) => (
          <div
            key={repo.id}
            className={styles.projectCard}
            onClick={() => {
              window.open(repo.html_url, "_blank");
            }}
          >
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Projects;
