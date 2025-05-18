import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RecentGithubProjects from "../../components/RecentGithubProjects";

const RecentProjects = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/fizzycoding/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div>
      <section
        ref={containerRef}
        className="overflow-hidden min-h-screen md:py-20 relative z-10 justify-center max-w-5xl m-auto items-center"
      >
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-main text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Recent projects
        </motion.h2>

        <motion.p
          className="text-center text-second max-sm:px-3 max-sm:text-sm sm:font-medium max-w-2xl mt-5 dark:text-zinc-400 m-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          A few of my recent GitHub projects, updated regularly.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 px-3 sm:mt-16 gap-5">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
            >
              <RecentGithubProjects
                title={repo?.name}
                description={repo.description || "No description"}
                forks={repo.forks_count}
                stars={repo.stargazers_count}
                language={repo.language}
                url={repo.html_url}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;
