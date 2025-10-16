import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
  ExternalLink,
  Home,
  User,
  FileText,
} from "lucide-react";
export const personalInfo = {
  name: "Jaswant Karri",
  email: "jaswant5511246@gmail.com",
  phone: "+91 1234567890", // Example phone number
  photoUrl: "https://github.com/jaswant-karri.png", // Using GitHub profile picture
  about:
    "I'm a passionate web developer with a knack for creating modern, responsive, and user-friendly web applications. I thrive on turning complex problems into simple, beautiful, and intuitive designs.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jaswant-karri-84ab0b33b/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/jaswant-karri", // Assuming GitHub profile
      icon: Github,
    },
  ],
};
export const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
];
export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process. Built with modern web technologies.",
    skillsUsed: ["React", "Node.js", "Express", "MongoDB"],
    websiteLink: "https://example.com/project-one",
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=E-commerce",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website, designed to be clean, modern, and fully responsive. Showcases my skills and projects effectively.",
    skillsUsed: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    websiteLink: "#", // Link to the current site
    imageUrl: "https://placehold.co/600x400/ec4899/ffffff?text=Portfolio",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application that helps users organize their workflow with drag-and-drop functionality.",
    skillsUsed: ["Vue.js", "Firebase", "SCSS"],
    websiteLink: "https://example.com/project-three",
    imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Task+App",
  },
  {
    title: "Weather Dashboard",
    description:
      "A simple and elegant weather dashboard that provides real-time weather information for any city in the world using a third-party API.",
    skillsUsed: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    websiteLink: "https://example.com/project-four",
    imageUrl: "https://placehold.co/600x400/22c55e/ffffff?text=Weather+App",
  },
];
export const education = [
  {
    degree: "Diploma in Computer Science",
    institution: "S.V. Government Polytechnic College, Tirupati",
    year: "2023 - 2026",
    icon: GraduationCap,
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "JNTUK",
    year: "2026 - 2029",
    icon: GraduationCap,
  },
];
export const experience = [
  {
    role: "Founding Member",
    company: "Starterwave",
    period: "2023 - Present",
    description:
      "Contributed to the foundational development and strategic direction of the company, focusing on building scalable web solutions from the ground up.",
    icon: Briefcase,
  },
  {
    role: "Web Developer",
    company: "Citrixltd",
    period: "2024 - Present",
    description:
      "Developed and maintained responsive websites and web applications, collaborating with cross-functional teams to deliver high-quality products.",
    icon: Briefcase,
  },
];
export const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "My Projects", icon: Code },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];
export const contactDetails = [
  {
    label: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
];