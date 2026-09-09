import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLayerGroup } from "react-icons/fa";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
            <FaLayerGroup />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Tools I use to
            <span className="block text-neutral-400 dark:text-neutral-600">
              turn ideas into reality.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
            A growing toolkit built through hands-on projects,
            experimentation and continuous learning.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
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
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
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
                    layoutId="activeSkillCategory"
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
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-400 dark:text-neutral-600">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;