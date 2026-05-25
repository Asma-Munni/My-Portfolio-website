"use client";

import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaCode,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

const projects = [
  {
    title: "Smart Study Nest",
    category: "Full Stack Project",
    overview:
      "A study room booking platform where users can browse rooms, view details, book rooms by time slot, and manage listings securely.",
    github: "https://github.com/Asma-Munni/smart-study-nest",
    liveUrl: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Secure authentication and protected routes",
      "Study room browsing and search functionality",
      "Room booking with date and time slot",
      "Owner-based room add, update, and delete system",
    ],
  },
  {
    title: "SunCart Summer Essentials Store",
    category: "E-commerce Project",
    overview:
      "A summer-themed e-commerce application where users can explore products, view details, login, and manage their profile.",
    github: "https://github.com/Asma-Munni/suncart-summe-essentials-store",
    liveUrl: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "DaisyUI"],
    features: [
      "Responsive product listing interface",
      "Product details page with dynamic routing",
      "Authentication system with user profile",
      "Conditional navbar based on user session",
    ],
  },
  {
    title: "DigiTools Products React",
    category: "React Project",
    overview:
      "A React-based digital product showcase platform with interactive product cards and cart management functionality.",
    github: "https://github.com/Asma-Munni/DigiTools-Products-React",
    liveUrl: "",
    technologies: ["React", "JavaScript", "Tailwind CSS", "DaisyUI"],
    features: [
      "Interactive product card design",
      "Cart add and remove functionality",
      "Real-time cart update system",
      "Responsive layout for different devices",
    ],
  },
  {
    title: "Job Application Tracker",
    category: "JavaScript Project",
    overview:
      "A job tracking application built to practice DOM manipulation, events, and user interaction handling with JavaScript.",
    github: "https://github.com/Asma-Munni/Job-Application-Tracker",
    liveUrl: "",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Job application tracking interface",
      "DOM selection and event handling",
      "Dynamic element creation",
      "Clean and simple user interaction flow",
    ],
  },
  {
    title: "GitHub Issue Tracker",
    category: "Frontend Project",
    overview:
      "A frontend issue tracker project focused on creating an interactive issue management interface using JavaScript.",
    github: "https://github.com/Asma-Munni/Github-Issue-Tracker",
    liveUrl: "",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    features: [
      "Issue tracking UI design",
      "Interactive JavaScript functionality",
      "Responsive Tailwind CSS styling",
      "Simple and clean frontend structure",
    ],
  },
];

const techIcons = {
  "Next.js": <SiNextdotjs />,
  React: <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  JavaScript: <SiJavascript />,
  "Node.js": <SiNodedotjs />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My Projects
          </h2>

          <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-9">
            A collection of my academic and personal projects built with modern
            frontend and full stack technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-8 shadow-[0_0_30px_rgba(0,123,255,0.08)] hover:border-[#00ff99] hover:-translate-y-2 transition duration-300"
            >
              {/* Top Icon + Category */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-full border border-[#184a91] flex items-center justify-center group-hover:border-[#00ff99] group-hover:text-[#00ff99] transition duration-300">
                  <FaCode size={24} />
                </div>

                <span className="text-sm text-zinc-300 bg-zinc-800 px-4 py-2 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-5 group-hover:text-[#00ff99] transition duration-300">
                {project.title}
              </h3>

              {/* Overview */}
              <p className="text-zinc-400 text-base leading-8 mb-7">
                {project.overview}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-zinc-300 border border-[#184a91] px-4 py-2 rounded-full bg-black/40"
                  >
                    <span className="text-[#00ff99]">
                      {techIcons[tech] || <FaCode />}
                    </span>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Major Features</h4>

                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-zinc-400 text-base leading-7"
                    >
                      <span className="text-[#00ff99] mt-1">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full border border-[#184a91] py-4 rounded-2xl text-base font-semibold hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] py-4 rounded-2xl text-base font-semibold hover:scale-[1.02] transition duration-300"
                  >
                    <FaArrowUpRightFromSquare size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;