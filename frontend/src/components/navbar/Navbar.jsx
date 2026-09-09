import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBars,
    FaTimes,
    FaSun,
    FaMoon,
    FaDownload,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "GitHub", id: "github" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);

            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setIsMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="fixed left-0 top-0 z-50 w-full px-4 pt-4"
        >
            {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
                <nav
                    className="animated-navbar-border flex h-16 items-center justify-between px-4 sm:px-6"
                >

                    {/* Logo */}
                    <button
                        onClick={() => handleNavigation("home")}
                        className="group text-left"
                        aria-label="Go to home"
                    >
                        <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Himanshu<span className="text-neutral-500">.</span>
                        </span>

                        <span className="block text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                            Developer
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                            >
                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 -z-10 rounded-full bg-neutral-100 dark:bg-neutral-900"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden items-center gap-3 md:flex">

                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.span
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaSun />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaMoon />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Resume */}
                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            <FaDownload className="text-xs" />
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">

                        {/* Mobile Theme */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.span
                                        key="mobile-sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <FaSun />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="mobile-moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <FaMoon />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isMenuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <FaTimes />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <FaBars />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            {/* </div> */}

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-black/10 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/95 md:hidden"
                    >
                        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.04,
                                    }}
                                    onClick={() => handleNavigation(item.id)}
                                    className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${activeSection === item.id
                                        ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-white"
                                        : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900/50"
                                        }`}
                                >
                                    {item.name}
                                </motion.button>
                            ))}

                            {/* Mobile Resume */}
                            <motion.a
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: navItems.length * 0.04,
                                }}
                                href="/resume.pdf"
                                download
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"
                            >
                                <FaDownload className="text-xs" />
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;