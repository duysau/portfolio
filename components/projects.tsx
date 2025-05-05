import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const projects = [
  {
    title: "DMS - Distribution Management System",
    description: "A comprehensive distribution management system for a company",
    image:
      "https://cdn-img.upanhlaylink.com/img/image_2025050554ffad15888316566f7812e5c0c5c389.jpg",
    tags: ["ReactJS", "Typescript", "Chart.js", "Ant Design"],
  },
  {
    title: "CRM - Customer Relationship Management",
    description: "A customer relationship management system for a company",
    image:
      "https://cdn-img.upanhlaylink.com/img/image_20250505399ca44edf5db3c6a6dd47abcff3ffd9.jpg",
    tags: ["ReactJs", "Typescript", "Chart.js", "Ant Design"],
  },
  {
    title: "PPF - Procurement Process Flow",
    description:
      "A technique and structured method used to streamline an organization",
    image:
      "https://cdn-img.upanhlaylink.com/img/image_202505052a2879ab49f52f059821e003d6939490.jpg",
    tags: ["ReactJs", "Typescript", "Ant Design"],
  },
  {
    title: "Future DPTP",
    description:
      "A decentralized platform for trading standardized futures contracts.",
    image:
      "https://cdn-img.upanhlaylink.com/img/image_202505053518c934461f92bcd55cc15be0b79a14.jpg",
    tags: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Socket.io",
      "Chakra UI",
      "Redux",
      "Wagmi",
      "Ethers",
      "Web3",
      "Blockchain",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden group hover:shadow-xl transition-shadow py-0"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/20 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
