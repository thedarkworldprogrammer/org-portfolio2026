import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa";

const GitHubStats = ({ profile, repositories }) => {
  if (!profile) {
    return null;
  }

  const totalStars = repositories.reduce(
    (total, repo) =>
      total + repo.stargazers_count,
    0
  );

  const stats = [
    {
      label: "Public Repositories",
      value: profile.public_repos,
      icon: FaCodeBranch,
    },
    {
      label: "Followers",
      value: profile.followers,
      icon: FaUsers,
    },
    {
      label: "Following",
      value: profile.following,
      icon: FaUsers,
    },
    {
      label: "Total Stars",
      value: totalStars,
      icon: FaStar,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="flex items-center justify-between">
              <p className="text-2xl font-black text-neutral-950 dark:text-white">
                {stat.value}
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                <Icon size={15} />
              </div>
            </div>

            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GitHubStats;