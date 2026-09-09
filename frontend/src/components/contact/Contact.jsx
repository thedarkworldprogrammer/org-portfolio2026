import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950 sm:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />

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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Let's build something
            <span className="block text-neutral-400 dark:text-neutral-600">
              meaningful together.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
            Have an idea, opportunity or just want to say hello?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-col"
          >
            {/* Availability Card */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Open to Opportunities
                </p>
              </div>

              <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                I'm currently open to internships, fresher
                opportunities and interesting projects where I can
                contribute and grow.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-5 space-y-3">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <FaEnvelope />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-neutral-400">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    <a href="mailto:himanshutiwarykhrhna@gmail.com">himanshutiwarykhrhna@gmail.com</a>
                  </p>
                </div>

                <FaArrowRight className="ml-auto text-xs text-neutral-400 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-xs text-neutral-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-auto pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Find me online
              </p>

              <div className="flex gap-2">
                <a
                  href="https://github.com/thedarkworldprogrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:-translate-y-1 hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/thedarkworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:-translate-y-1 hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://instagram.com/who.satish"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:-translate-y-1 hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60 sm:p-8"
          >
            <div className="mb-7">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                Send me a message
              </h3>

              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                I'll try to get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;