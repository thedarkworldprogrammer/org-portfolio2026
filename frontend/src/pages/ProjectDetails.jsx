import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-neutral-950">
        <div className="text-center">
          <h1 className="text-5xl font-black text-neutral-950 dark:text-white">
            Project Not Found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-950"
          >
            <FaArrowLeft size={12} />
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white"
            >
              <FaArrowLeft size={12} />
              Back to Portfolio
            </Link>

            <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
              {project.category}
            </span>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-500 dark:text-neutral-400 sm:text-lg">
              {project.description}
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-950"
              >
                <FaGithub />
                GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 dark:border-neutral-700 dark:text-white"
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </a>
              )}

            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Details */}
      <section className="border-t border-neutral-200 py-20 dark:border-neutral-800">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Technologies */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Technologies
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Key Features
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-neutral-200 p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;