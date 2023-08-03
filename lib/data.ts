import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: React.createElement(HiHome) },
  { name: "about", path: "/about", icon: React.createElement(HiUser) },
  {
    name: "services",
    path: "/services",
    icon: React.createElement(HiRectangleGroup),
  },
  { name: "events", path: "/events", icon: React.createElement(HiViewColumns) },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: React.createElement(HiChatBubbleBottomCenterText),
  },
  {
    name: "contact",
    path: "/contact",
    icon: React.createElement(HiEnvelope),
  },
];

export const eventsData = [
  {
    title: "Birmingham University Event",
    location: "Birmingham, UK",
    description:
      "Star studed event with some of the heavy hitter in the business.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Birmingham Challenge",
    location: "Houston, TX",
    description:
      "Challenge yourself, try solving these problem and see where you rank amongst Bimringham top talent.",
    icon: React.createElement(FaReact),
    date: "2023 Summer - TBA",
  },
  {
    title: "Business Conference",
    location: "Orlando, FL",
    description:
      "Meet leaders in business, build your network and learn from the best.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Christmas - TBA",
  },
] as const;

export const projectsData = [
  {
    title: "Grassroots Projects",
    description:
      "We engage with universities, colleges and schools to equip individuals the with skills, knowledge, and confidence needed to thrive in their personal and professional lives. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    grProjects: [
      {
        title: "Free Laptops",
        path: "/thumb4.jpg",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet dignissimos distinctio tempore harum laudantium.",
      },
      {
        title: "Acing Case Studies",
        path: "/thumb1.jpg",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet dignissimos distinctio tempore harum laudantium.",
      },
      {
        title: "Interviewing Strategies",
        path: "/thumb2.jpg",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet dignissimos distinctio tempore harum laudantium.",
      },
      {
        title: "Business Mentor",
        path: "/thumb3.jpg",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eveniet dignissimos distinctio tempore harum laudantium.",
      },
    ],
  },
  {
    title: "Corporate Engagements",
    description:
      "At Katapult X, we believe in harnessing the power of collaboration to drive enduring and impactful change. Through strategic partnerships and collaborations with global companies, government bodies and research organisations, we aim to facilitate best practices and foster a culture of shared learning.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Entrepreneurship",
    description:
      "Equip small business and entrepreneurs with the requisite skills to be able to engage business clients effectively.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
