import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-neutral-950/10 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-black/30"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Featured */}
        {project.featured && (
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">

        <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-500 dark:bg-neutral-900 dark:text-neutral-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-5 dark:border-neutral-900">

          <Link
            to={`/projects/${project.slug}`}
            className="group/link flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white"
          >
            View Case Study

            <FaArrowRight className="text-xs text-violet-500 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
            >
              <FaGithub size={15} />
            </a>

            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
              >
                <FaExternalLinkAlt size={13} />
              </a>
            )}

          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;