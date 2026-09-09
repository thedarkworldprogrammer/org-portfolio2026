import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaCode,
  FaChevronDown,
} from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 dark:bg-neutral-950"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple Orb */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/15"
        />

        {/* Cyan Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10"
        />

        {/* Pink Orb */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/5 blur-3xl dark:bg-pink-500/10"
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">

        {/* Left Content */}
        <div>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-sm text-neutral-600 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            Open to Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mb-3 text-base font-medium text-neutral-500 dark:text-neutral-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="text-5xl font-black tracking-tight text-neutral-500 sm:text-6xl lg:text-7xl"
          >
            Himanshu
            <span className="block bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
              Tiwari.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-5 flex items-center gap-3"
          >
            <FaCode className="text-violet-500" />

            <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 sm:text-2xl">
              MERN Stack Web Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-neutral-500 dark:text-neutral-400 sm:text-lg"
          >
            I build modern, responsive and user-focused web applications
            with clean interfaces, scalable architecture and real-world
            functionality.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-950/10 transition-all hover:shadow-xl dark:bg-white dark:text-neutral-950 dark:shadow-white/5"
            >
              View Projects

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full border border-neutral-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-neutral-800 backdrop-blur-sm transition-all hover:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-white dark:hover:border-neutral-500"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <div className="mt-9">
            <SocialLinks />
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-5 rounded-[2rem] border border-dashed border-violet-400/30 dark:border-violet-400/20"
          />

          {/* Image Glow */}
          <div className="absolute inset-0 scale-90 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-pink-500/20 blur-3xl" />

          {/* Image Container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <img
              src="/images/himanshu.jpeg"
              alt="Himanshu Tiwari"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90"
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Currently building
            </p>

            <p className="mt-1 text-sm font-bold text-neutral-900 dark:text-white">
              Full-Stack Web Development
            </p>
          </motion.div>

          {/* Floating Code Badge */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 top-8 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90"
          >
            <FaCode className="text-lg text-violet-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-neutral-700 dark:hover:text-neutral-200 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaChevronDown size={12} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;