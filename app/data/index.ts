import orbit from "@/app/assets/project/orbit.png";
import ebook from "@/app/assets/project/ebook.png";
import easybank from "@/app/assets/project/easybank.png";
import fortry from "@/app/assets/project/fortry.png";
import indotravi from "@/app/assets/project/indotravi.png";
import huddle from "@/app/assets/project/huddle.png";
import focus from "@/app/assets/project/focus.png";
import shop from "@/app/assets/project/shop.png";
import virtualr from "@/app/assets/project/virtualr.png";
import dv from "@/app/assets/project/dv.png";
import insta from "@/app/assets/project/insta.png";
import fortry2 from "@/app/assets/project/fortry2.png";
import leinad from "@/app/assets/project/leinad.png";
import legacy from "@/app/assets/project/legacy.png";
import ade from "@/app/assets/project/ade.png";
import shelf from "@/app/assets/project/shelf.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string | StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Orbit",
    description:
      "Orbit was my very first hosted project on GitHub and marked the true beginning of my web development journey. It was a simple site , but launching it online gave me a huge sense of achievement. Through this project, I learned how to structure a webpage, style it responsively.",
    technologies: ["Html", "CSS"],
    image: orbit,
    liveUrl: "https://orbit-eta.vercel.app/index.html",
    year: "2022",
  },
  {
    id: 2,
    title: "E-book",
    description:
      "After learning CSS, I moved on to Bootstrap through a Udemy course. This project helped me practice building responsive layouts and gave me confidence in using a framework for faster styling. It was also one of the first times I started seeing my projects look polished and professional.",
    technologies: ["Html", "CSS", "Bootstrap"],
    image: ebook,
    githubUrl: "https://github.com/Emmagold01/E-book.git",
    liveUrl: "https://e-book-alpha.vercel.app/",
    year: "2024",
  },
  {
    id: 3,
    title: "Easybank",
    description:
      "This was when I started pushing myself beyond tutorials and looking for real challenges. I discovered Frontend Mentor, where I found structured projects that tested my skills. Easybank was one of those, and it taught me how to pay attention to design details and responsiveness.",
    technologies: ["Html ", "CSS", "Frontend-mentor"],
    image: easybank,
    githubUrl: "https://github.com/Emmagold01/Easybank.git",
    liveUrl: "https://easybank-lemon.vercel.app/index.html",
    year: "2024",
  },
  {
    id: 4,
    title: "Fortry",
    description:
      "This was a big step for me because I built it for a friend who’s a designer. It pushed me to apply everything  to meet someone else’s expectations. Through this, I learned how to turn design ideas into a functional, responsive website.",
    technologies: ["Html", "CSS", "Bootstap", "Javascript", "Pinterest"],
    image: fortry,
    githubUrl: "https://github.com/Emmagold01/fortry.git",
    liveUrl: "https://fortry.vercel.app/",
    year: "2024",
  },
  {
    id: 5,
    title: "Indotravi",
    description:
      "While balancing school and learning, I wanted to see if I still remembered the basics of HTML and CSS. I came across a beautiful design on Pinterest and decided to challenge myself by recreating it. This project reminded me how far I had come and kept my fundamentals sharp.",
    technologies: ["Html", "CSS", "Pinteres"],
    image: indotravi,
    githubUrl: "https://github.com/Emmagold01/indotravi",
    liveUrl: "https://indotravi-inky.vercel.app",
    year: "2024",
  },
  {
    id: 6,
    title: "Huddle",
    description:
      "After losing my system and starting fresh, I came back more determined to continue my journey. I returned to Frontend Mentor, picked a project to brush up on HTML and CSS, and rebuilt my confidence. Huddle reminded me that setbacks can become a strong restart point.",
    technologies: ["Html", "CSS", "Javascript", "Frontend-mentor"],
    image: huddle,
    githubUrl: "https://github.com/Emmagold01/huddle",
    liveUrl: "https://huddle-beige.vercel.app/",
    year: "2025",
  },
  {
    id: 7,
    title: "FocusFlow",
    description:
      "After learning JavaScript, I built my very first JS application — a To-Do List web app. Inspired by a shopping list project from my course, this marked the point where I moved from static pages to interactive applications, making my learning feel alive.",
    technologies: ["Html", "CSS", "Javascript"],
    image: focus,
    githubUrl: "https://github.com/Emmagold01/FocusFlow",
    liveUrl: "https://focus-flow-sigma.vercel.app/",
    year: "2025",
  },
  {
    id: 8,
    title: "ShopEase",
    description:
      "Stepping into React, I built ShopEase during my internship as a major milestone project. It’s a shopping cart web app where users can browse items and instantly view selected products, solidifying my foundation in React development.",
    technologies: ["Tailwind-CSS", "Javascript", "React"],
    image: shop,
    githubUrl: "https://github.com/Emmagold01/ShopEase",
    liveUrl: "https://shop-ease-orpin.vercel.app/",
    year: "2025",
  },
  {
    id: 9,
    title: "VirtualR",
    description:
      "Inspired by a YouTube tutorial, I recreated this modern VR landing page to sharpen my React and Tailwind CSS skills while exploring clean UI design. Here i learnt structure and how to build reusable component.",
    technologies: ["Tailwind-CSS", "Javascript", "React"],
    image: virtualr,
    githubUrl: "https://github.com/Emmagold01/virtualR",
    liveUrl: "https://virtual-r-henna-sigma.vercel.app/",
    year: "2025",
  },
  {
    id: 10,
    title: "DV",
    description:
      "A landing page UI built as a task from my team lead, focusing on modern design and responsive layout for a wedding-themed project.",
    technologies: ["Tailwind-CSS", "Javascript", "React"],
    image: dv,
    githubUrl: "https://github.com/Emmagold01/DV",
    liveUrl: "https://dv-taupe.vercel.app/",
    year: "2025",
  },
  {
    id: 11,
    title: "Instaclone",
    description:
      "A simple Instagram UI clone built to practice React and Tailwind CSS while recreating core design elements.",
    technologies: ["Tailwind-CSS", "Javascript", "React"],
    image: insta,
    githubUrl: "https://github.com/Emmagold01/instagram-clone",
    liveUrl: "https://instagram-clone-theta-sage.vercel.app/",
    year: "2025",
  },
  {
    id: 12,
    title: "Fortry v2",
    description:
      "An upgraded version of Fortry’s portfolio. This time, he designed it himself and I collaborated to bring his vision to life.",
    technologies: [
      "Tailwind-CSS",
      "Javascript",
      "React",
      "Typescript",
      "Framer",
    ],
    image: fortry2,
    githubUrl: "https://github.com/Emmagold01/Fortry-portfolio",
    liveUrl: "https://fortry-portfolio.vercel.app/",
    year: "2025",
  },
  {
    id: 13,
    title: "Leinad",
    description:
      "A sleek photographer portfolio site built with React, TypeScript, and Tailwind. Features auto-scrolling galleries, horizontal scroll sections, and smooth page transitions.",
    technologies: [
      "Tailwind-CSS",
      "Javascript",
      "React",
      "Typescript",
      "Framer",
    ],
    image: leinad,
    githubUrl: "https://github.com/Emmagold01/leinad",
    liveUrl: "https://leinad-gamma.vercel.app/",
    year: "2025",
  },
  {
    id: 14,
    title: "Legacy234",
    description:
      "A vibrant website built for Lagos State’s Legacy234 Paint & Sip Competition, celebrating creativity as 100 teams paint Nigeria’s history on 100 canvases.",
    technologies: ["Html", "Tailwind-CSS", "Javascript"],
    image: legacy,
    githubUrl: "https://github.com/Emmagold01/legacy",
    liveUrl: "https://legacy234.org/",
    year: "2025",
  },
  {
    id: 15,
    title: "Adetunwase360",
    description:
      "A fullstack project built in collaboration with a backend developer for Adetunwase, who attempts to break a Guinness World Record. The site highlights his journey, events, and gives 1 million Nigerians a platform to tell their stories.",
    technologies: ["Tailwind-CSS", "Javascript", "React", "Framer"],
    image: ade,
    liveUrl: "https://adetunwase360.com/",
    year: "2025",
  },
  {
    id: 16,
    title: "Shelf",
    description:
      "Shelf.Africa is a digital startup building a publishing and reading platform tailored specifically for African authors and readers",
    technologies: [
      "Next.js",
      "Tailwind-CSS",
      "Typescript",
      "Framer",
      "Supabase",
      "Vercel",
    ], 
    image: shelf,
    liveUrl: "https://shelf.africa",
    year: "2026",
  },
];
