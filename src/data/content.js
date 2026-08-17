// ---------------------------------------------------------------------------
// SITE CONTENT
// Everything text-based lives here so you can update the site without
// digging through components. Based only on what was provided — anywhere
// details were missing, a placeholder is used instead of invented content.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ryza Mae Curiba",
  headline: "IT Student · UI/UX · Web Development · IT Support",
  intro:
    "BS Information Technology student interested in creating clean digital experiences, building web projects, and solving practical IT problems.",
  // Put your actual CV file at public/cv/Ryza-Mae-Curiba-CV.pdf and this
  // button will download it. Until then the link points at a placeholder.
  cvPath: "/Ryza-Mae-Curiba-CV.pdf",
  email: "ryzacuriba16@gmail.com"
};

export const about = {
  paragraphs: [
    "I'm a BS Information Technology student at Rizal Technological University, currently exploring where I fit best across the field — from IT support to web development to UI/UX design.",
    "So far that's meant hands-on work with hardware troubleshooting, data management, and a handful of academic and personal projects where I get to design and build things end to end.",
  ],
};

// Add or remove social links here — none were provided yet, so this list
// starts empty and the UI simply won't render a socials row until you add one.
// Example: { label: "GitHub", url: "https://github.com/your-username" }
export const socials = [];

export const skills = [
  {
    category: "Development",
    items: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "XML"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Canva", "VS Code"],
  },
  {
    category: "Productivity",
    items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
];

export const experience = [
  {
    org: "Philippine Retirement Authority",
    role: "IT Intern",
    period: "February – April 2026",
    bullets: [
      "Deployed and configured Microsoft Office and Visual Studio",
      "Managed data in SQL Server Management Studio",
      "Handled laptop inventory and hardware support",
      "Performed HDD removal and cloning",
      "Carried out system resets and troubleshooting",
      "Supported the employee request portal",
      "Troubleshot Ethernet and login issues",
      "Built Excel-based website tree mapping",
    ],
  },
  {
    org: "Municipal Environment and Natural Resources Office",
    role: "IT Intern",
    period: "March – April 2023",
    bullets: [
      "Prepared and organized official documents and paperwork to support daily office operations and departmental meetings", 
      "Participated in and assisted in coordinating a provincial event involving multiple Rizal municipalities" 
     ],
  },
];

// image: left as null on purpose — no project images exist yet, so
// ProjectCard renders a lightweight generated placeholder instead of a
// broken or invented image. Add a path (e.g. "/assets/projects/foo.png")
// once you have real screenshots.
// link: left as null where no project URL exists — the card shows an
// "[Add project link]" placeholder instead of a fake link.
export const projects = [
  {
    name: "Portfolio Website",
    category: "UI/UX Design",
    description: "UI/UX design concept for a personal portfolio.",
    tech: ["Figma"],
    link: null,
    image: null,
  },
  {
    name: "Landing Page",
    category: "UI/UX Design",
    description: "UI/UX design concept for a product landing page.",
    tech: ["Figma"],
    link: null,
    image: null,
  },
  {
    name: "Web / Mobile App UI Concept",
    category: "UI/UX Design",
    description: "UI concept design spanning a web and mobile app experience.",
    tech: ["Figma"],
    link: null,
    image: null,
  },
  {
    name: "Quiz App",
    category: "UI/UX Design",
    description: "UI/UX design concept for a quiz application.",
    tech: ["Figma"],
    link: null,
    image: null,
  },
  {
    name: "E-commerce Product Page",
    category: "UI/UX Design",
    description: "UI/UX design concept for an e-commerce product page.",
    tech: ["Figma"],
    link: null,
    image: null,
  },
  {
    name: "Browser-Based Photo Booth",
    category: "Web Development",
    description: "A browser-based photo booth built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
    image: null,
  },
  {
    name: "Interactive Web Interface",
    category: "Web Development",
    description: "An interactive interface exploring front-end behaviour with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
    image: null,
  },
  {
    name: "Discord Chatbot",
    category: "Academic Project",
    description: "A chatbot built for Discord as an academic project.",
    tech: [],
    link: null,
    image: null,
  },
  {
    name: "Python-Based Game",
    category: "Academic Project",
    description: "A game built in Python as an academic project.",
    tech: ["Python"],
    link: null,
    image: null,
  },
  {
    name: "Character / Visual Designs",
    category: "Academic Project",
    description: "Character and visual design work created for coursework.",
    tech: [],
    link: null,
    image: null,
  },
  {
    name: "Other IT Projects",
    category: "Academic Project",
    description: "Additional academic projects focused on logic, design, and problem solving.",
    tech: [],
    link: null,
    image: null,
  },
];

export const certificates = [
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    date: "December 2025",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
