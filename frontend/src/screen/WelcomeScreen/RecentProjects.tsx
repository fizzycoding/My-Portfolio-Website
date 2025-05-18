import { useEffect, useState } from "react";
import RecentGithubProjects from "../../components/RecentGithubProjects";

const RecentProjects = () => {
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
    <div>
      <section className="overflow-hidden min-h-screen md:py-20 relative z-10 justify-center max-w-5xl m-auto items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center">
          Recent projects
        </h2>
        <p className="text-center text-second max-sm:px-3 max-sm:text-sm sm:font-medium max-w-2xl mt-5 dark:text-zinc-400 m-auto">
          A few of my recent GitHub projects, updated regularly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 px-3 sm:mt-16 gap-5">
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
      </section>
    </div>
  );
};

export default RecentProjects;
