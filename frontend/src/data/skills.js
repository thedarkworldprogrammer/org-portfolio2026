import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    level: 90,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
    level: 85,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: FaJs,
    level: 85,
  },
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
    level: 85,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    level: 85,
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SiVite,
    level: 80,
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: FaNodeJs,
    level: 80,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    level: 80,
  },

  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    level: 80,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    level: 75,
  },

  {
    name: "Git",
    category: "Tools",
    icon: FaGitAlt,
    level: 85,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: FaGithub,
    level: 85,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: SiPostman,
    level: 80,
  },
];