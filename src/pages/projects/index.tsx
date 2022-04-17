import { useEffect, useState } from "react";
import styles from "./projects.module.css";

type GithubProject = {
  id: number;
  name: string;
  description?: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Array<GithubProject>>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/coffeegerm/repos?per_page=100")
      .then((res) => res.json())
      .then(setRepos);
  }, []);

  return (
    <div>
      {repos?.map((repo) => (
        <div key={repo.id} className={styles.projectCard}>
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
