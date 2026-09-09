himanshu-portfolio/
│
├── frontend/
│   │
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── resume.pdf
│   │   └── images/
│   │       ├── profile.png
│   │       └── projects/
│   │           ├── civic-system.png
│   │           └── log-monitoring.png
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── SectionTitle.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── ScrollToTop.jsx
│   │   │   │
│   │   │   ├── navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── MobileMenu.jsx
│   │   │   │
│   │   │   ├── hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── SocialLinks.jsx
│   │   │   │
│   │   │   ├── about/
│   │   │   │   ├── About.jsx
│   │   │   │   └── Timeline.jsx
│   │   │   │
│   │   │   ├── skills/
│   │   │   │   ├── Skills.jsx
│   │   │   │   └── SkillCard.jsx
│   │   │   │
│   │   │   ├── projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   └── ProjectFilter.jsx
│   │   │   │
│   │   │   ├── github/
│   │   │   │   ├── GitHubStats.jsx
│   │   │   │   └── GitHubRepos.jsx
│   │   │   │
│   │   │   ├── faq/
│   │   │   │   ├── FAQ.jsx
│   │   │   │   └── FAQItem.jsx
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── ContactForm.jsx
│   │   │   │
│   │   │   └── footer/
│   │   │       └── Footer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── data/
│   │   │   ├── projects.js
│   │   │   ├── skills.js
│   │   │   ├── faq.js
│   │   │   └── socialLinks.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   ├── useScroll.js
│   │   │   └── useGitHub.js
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── githubApi.js
│   │   │
│   │   ├── utils/
│   │   │   ├── animations.js
│   │   │   └── constants.js
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   └── mailConfig.js
│   │   │
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   │
│   │   ├── routes/
│   │   │   └── contactRoutes.js
│   │   │
│   │   ├── services/
│   │   │   └── emailService.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── errorMiddleware.js
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── README.md
└── .gitignore