import React from "react";
import { Card } from "./ui/card";

const skills = [
  {
    name: "React",
    icon: "fab fa-react",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "Building interactive UIs with reusable components.",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    description: "Creating scalable backend services and APIs.",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    description: "Modern ES6+ syntax and functional programming.",
  },
  {
    name: "CSS/Tailwind",
    icon: "fab fa-css3-alt",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    description: "Responsive designs with utility-first CSS.",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    description: "Version control and collaborative workflows.",
  },

  {
    name: "REST APIs",
    icon: "fas fa-server",
    color: "text-gray-500 dark:text-gray-300",
    bgColor: "bg-gray-100 dark:bg-gray-600",
    description: "Designing and consuming RESTful services.",
  },
  {
    name: "Responsive Design",
    icon: "fas fa-mobile-alt",
    color: "text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    description: "Mobile-first approach for all devices.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I&apos;ve worked with a variety of technologies in the web development
          world. Here are some of my core competencies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="p-6 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center mb-4`}
              >
                <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
              </div>
              <h3 className="font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
