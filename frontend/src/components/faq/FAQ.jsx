import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

import FAQItem from "./FAQItem";
import { faqData } from "../../data/faq";

const categories = [
  "All",
  "About Me",
  "Projects",
  "Work",
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [openId, setOpenId] = useState(null);

  const filteredFAQs = useMemo(() => {
    if (activeCategory === "All") {
      return faqData;
    }

    return faqData.filter(
      (faq) => faq.category === activeCategory
    );
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenId(null);
  };

  const handleToggle = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-900/60 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">

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
            <FaQuestionCircle />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            Frequently asked
            <span className="block text-neutral-400 dark:text-neutral-600">
              questions.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-500 dark:text-neutral-400">
            Some quick answers to common questions about me,
            my work and my projects.
          </p>
        </motion.div>

        {/* Categories */}
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
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  handleCategoryChange(category)
                }
                className="relative rounded-full px-5 py-2.5 text-sm font-medium"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFAQCategory"
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

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() =>
                    handleToggle(faq.id)
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom */}
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
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Didn't find what you're looking for?
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="ml-1 font-semibold text-neutral-700 underline underline-offset-4 hover:text-violet-500 dark:text-neutral-300"
            >
              Ask me directly.
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;