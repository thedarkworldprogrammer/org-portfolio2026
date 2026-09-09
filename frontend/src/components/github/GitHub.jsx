import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

import useGitHub from "../../hooks/useGitHub";
import GitHubStats from "./GitHubStats";
import GitHubRepos from "./GitHubRepos";
import { GITHUB_USERNAME } from "../../utils/constants";

const GitHub = () => {
  const {
    profile,
    repositories,
    loading,
    error,
  } = useGitHub();

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
              GitHub
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Code that lives
              <span className="block text-neutral-400 dark:text-neutral-600">
                beyond the portfolio.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
              Explore my public repositories, experiments and
              development work directly from GitHub.
            </p>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-neutral-950"
          >
            <FaGithub />

            Visit GitHub

            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-28 animate-pulse rounded-2xl bg-neutral-100 dark:bg-neutral-900"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-800">
            <FaGithub className="mx-auto text-3xl text-neutral-400" />

            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              {error}
            </p>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-violet-500"
            >
              Open GitHub Profile
            </a>
          </div>
        )}

        {/* Data */}
        {!loading && !error && profile && (
          <>
            <div className="mt-12">
              <GitHubStats
                profile={profile}
                repositories={repositories}
              />
            </div>

            <div className="mt-12">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                    Recent Repositories
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    Latest public work from GitHub.
                  </p>
                </div>
              </div>

              <GitHubRepos
                repositories={repositories}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHub;