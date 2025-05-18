import React, { useEffect, useState } from "react";
import RecentGithubProjects from "../../components/RecentGithubProjects";

const GitRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/fizzycoding/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);
  return (
    <div className="min-h-screen pt-24">
      <div className="flex gap-2 m-auto max-w-6xl px-3 flex-col mb-6">
        <h3 className="text-xl text-zinc-950 dark:text-zinc-50 md:text-2xl font-bold ">
          Repositories GitHub
        </h3>
        <p className="text-second max-sm:text-sm max-w-2xl  dark:text-zinc-400 ">
          Some of my github repositories
        </p>
      </div>
      <div className="grid md:grid-cols-2 max-w-6xl m-auto lg:grid-cols-3 mt-5 px-3 sm:mt-10 gap-5">
        {repos.map((repo: any) => (
          <RecentGithubProjects
            title={repo?.name}
            description={repo.description || "No description"}
            forks={repo.forks_count}
            stars={repo.stargazers_count}
            language={repo.language}
            url={repo.html_url}
            key={repo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GitRepos;
