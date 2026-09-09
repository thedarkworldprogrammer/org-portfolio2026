import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-900/60 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
              Projects
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Things I've
              <span className="block text-neutral-400 dark:text-neutral-600">
                built along the way.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
              A selection of projects built while exploring modern
              technologies and solving real-world problems.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/projects"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-all hover:-translate-y-1 hover:border-neutral-500 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:border-neutral-500"
          >
            View All Projects

            <FaArrowRight
              className="text-xs text-violet-500 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Only 4 Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom View All */}
        {projects.length > 4 && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-neutral-950"
            >
              Explore All Projects

              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;