import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaArrowUp,
    FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">

            {/* Subtle Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                {/* Main Footer */}
                <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">

                    {/* Brand */}
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
                        }}
                    >
                        <button
                            onClick={handleBackToTop}
                            className="group text-left"
                        >
                            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">
                                Himanshu
                                <span className="text-violet-500">.</span>
                            </h2>
                        </button>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                            MERN Stack Web Developer focused on building
                            practical, responsive and user-friendly web
                            applications.
                        </p>

                        {/* Email CTA */}
                        <a
                            href="mailto:himanshutiwarykhrhna@gmail.com"
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white"
                        >
                            <FaEnvelope className="text-violet-500" />

                            himanshutiwarykhrhna@gmail.com

                            <FaArrowRight
                                className="text-xs text-neutral-400 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </motion.div>

                    {/* Navigation */}
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
                            delay: 0.1,
                        }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-white">
                            Navigation
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            {[
                                ["Home", "top"],
                                ["About", "about"],
                                ["Skills", "skills"],
                                ["Projects", "projects"],
                                ["GitHub", "github"],
                                ["FAQ", "faq"],
                                ["Contact", "contact"],
                            ].map(([label, id]) => (
                                <button
                                    key={id}
                                    onClick={() => {
                                        if (id === "top") {
                                            handleBackToTop();
                                        } else {
                                            scrollToSection(id);
                                        }
                                    }}
                                    className="w-fit text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Social */}
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
                            delay: 0.2,
                        }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-white">
                            Connect
                        </h3>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                            Let's connect and build something meaningful
                            together.
                        </p>

                        <div className="mt-5 flex gap-2">

                            <a
                                href="https://github.com/thedarkworldprogrammer"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:bg-neutral-950 hover:text-white dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-white dark:hover:text-neutral-950"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/thedarkworld"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:bg-neutral-950 hover:text-white dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-white dark:hover:text-neutral-950"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://instagram.com/who.satish"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:bg-neutral-950 hover:text-white dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-white dark:hover:text-neutral-950"
                            >
                                <FaInstagram />
                            </a>

                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

                {/* Bottom */}
                <div className="relative flex flex-col items-center gap-4 py-6 sm:block">
                    {/* Copyright */}
                    <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
                        © {currentYear} Himanshu Tiwari. All rights reserved.
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={handleBackToTop}
                        className="group flex items-center gap-2 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
                    >
                        Back to top

                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:-translate-y-1 dark:border-neutral-800">
                            <FaArrowUp size={10} />
                        </span>
                    </button>
                </div>

            </div>
        </footer >
    );
};

export default Footer;