import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

const categories = [
  "All",
  "AI",
  "Frontend",
  "Backend",
  "Full Stack",
  "Web",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory ||
        project.type === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white py-32 dark:bg-neutral-950">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Back */}
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:hover:text-white"
        >
          <FaArrowLeft size={12} />
          Back to Portfolio
        </Link>

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            All Projects
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-6xl">
            Explore everything
            <span className="block text-neutral-400 dark:text-neutral-600">
              I've built.
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
            Browse through my projects and filter them by technology
            or development category.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative rounded-full px-5 py-2.5 text-sm font-medium"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-neutral-950 dark:bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={
                    isActive
                      ? "text-white dark:text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                  }
                >
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result Count */}
        <div className="mt-8">
          <p className="text-sm text-neutral-400">
            Showing{" "}
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-neutral-300 p-16 text-center dark:border-neutral-800">
            <p className="text-neutral-500 dark:text-neutral-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;