import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -6,
      }}
      className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-950/5 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-black/20"
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white dark:bg-neutral-900 dark:text-neutral-300 dark:group-hover:bg-white dark:group-hover:text-neutral-950">
            <Icon size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              {skill.name}
            </h3>

            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {skill.category}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold text-neutral-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress */}
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.05 + 0.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;