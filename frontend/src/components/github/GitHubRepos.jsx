import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";

const GitHubRepos = ({ repositories }) => {
  const displayedRepositories =
    repositories.slice(0, 6);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {displayedRepositories.map(
        (repository, index) => (
          <motion.a
            key={repository.id}
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            whileHover={{
              y: -6,
            }}
            className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-950/5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <FaGithub size={19} />
              </div>

              <FaExternalLinkAlt
                size={12}
                className="text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <h3 className="mt-5 line-clamp-1 font-bold text-neutral-950 dark:text-white">
              {repository.name}
            </h3>

            <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-neutral-500 dark:text-neutral-400">
              {repository.description ||
                "No description available."}
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
              {repository.language && (
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />

                  {repository.language}
                </span>
              )}

              <span className="flex items-center gap-1">
                <FaStar size={11} />
                {repository.stargazers_count}
              </span>

              <span className="flex items-center gap-1">
                <FaCodeBranch size={11} />
                {repository.forks_count}
              </span>
            </div>
          </motion.a>
        )
      )}
    </div>
  );
};

export default GitHubRepos;