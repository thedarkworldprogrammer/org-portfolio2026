import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/thedarkworldprogrammer",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/in/thedarkworld",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/who.satish",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:himanshutiwarykhrhna@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.url}
            target={social.name === "Email" ? undefined : "_blank"}
            rel={social.name === "Email" ? undefined : "noopener noreferrer"}
            aria-label={social.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.8 + index * 0.1,
            }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white"
          >
            <Icon size={16} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;