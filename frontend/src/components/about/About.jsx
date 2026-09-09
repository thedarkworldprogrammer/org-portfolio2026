import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  {
    value: "2+",
    label: "Major Projects",
  },
  {
    value: "MERN",
    label: "Development Stack",
  },
  {
    value: "B.Tech",
    label: "CSE Graduate",
  },
  {
    value: "∞",
    label: "Curiosity to Learn",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-900/60 sm:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Building with purpose,
            <span className="block text-neutral-400 dark:text-neutral-600">
              learning with curiosity.
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              <p>
                I'm <strong className="text-neutral-950 dark:text-white">
                  Himanshu Tiwari
                </strong>
                , a B.Tech Computer Science graduate and a passionate
                MERN Stack Web Developer who enjoys turning ideas into
                practical web applications.
              </p>

              <p>
                I focus on creating responsive, user-friendly interfaces
                and connecting them with reliable backend systems and
                databases. I enjoy working on projects where development
                meets real-world problems.
              </p>

              <p>
                Currently, I'm strengthening my full-stack development
                skills by building real-world projects and exploring
                modern approaches to web development, APIs and AI-powered
                applications.
              </p>
            </div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <FaRocket />
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">
                    Currently Focused On
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Building scalable full-stack applications, improving
                    UI/UX and exploring AI-powered web solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Learn More */}
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-7 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white"
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore my skills
              <FaArrowRight className="text-xs text-violet-500" />
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <p className="text-2xl font-black text-neutral-950 dark:text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Journey Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">
                    My Journey
                  </h3>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Education & development
                  </p>
                </div>
              </div>

              <div className="relative space-y-7 pl-7">

                {/* Vertical Line */}
                <div className="absolute bottom-1 left-[7px] top-1 w-px bg-neutral-200 dark:bg-neutral-800" />

                {/* Education */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-violet-500 dark:border-neutral-950" />

                  <p className="text-xs font-medium uppercase tracking-wider text-violet-500">
                    Education
                  </p>

                  <h4 className="mt-1 font-semibold text-neutral-900 dark:text-white">
                    B.Tech — Computer Science & Engineering
                  </h4>

                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    Building a strong foundation in computer science,
                    software development and problem solving.
                  </p>
                </div>

                {/* Development */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-cyan-500 dark:border-neutral-950" />

                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-500">
                    Development
                  </p>

                  <h4 className="mt-1 font-semibold text-neutral-900 dark:text-white">
                    Full-Stack Web Development
                  </h4>

                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    Learning by building complete applications with
                    modern frontend, backend and database technologies.
                  </p>
                </div>

                {/* Current */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-pink-500 dark:border-neutral-950" />

                  <p className="text-xs font-medium uppercase tracking-wider text-pink-500">
                    Now
                  </p>

                  <h4 className="mt-1 font-semibold text-neutral-900 dark:text-white">
                    Building Real-World Projects
                  </h4>

                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    Working on practical web and AI-powered projects
                    while continuously improving my development skills.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;