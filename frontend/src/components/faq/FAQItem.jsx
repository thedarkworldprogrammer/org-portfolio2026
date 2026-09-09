import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950"
          : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white sm:text-base">
          {faq.question}
        </span>

        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen
              ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
              : "bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400"
          }`}
        >
          <FaPlus size={11} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="border-t border-neutral-100 px-5 pb-5 pt-4 dark:border-neutral-900 sm:px-6">
              <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;