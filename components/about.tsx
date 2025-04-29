import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <Card className="relative w-64 h-64 py-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="About Me"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate Front-end Developer with 4+ years of
              experience building scalable ReactJS applications. Proficient in
              modern web technologies including TypeScript, Redux, Ant Design,
              and RESTful APIs. I excel in creating responsive web applications
              with a focus on performance optimization and delivering
              exceptional UI/UX in international projects.
            </p>

            <p className="text-muted-foreground mb-6">
              My expertise spans across the modern web stack including ReactJS,
              NextJS, Redux, and Context for state management. I&apos;m skilled
              in HTML5, CSS3, SCSS, and Tailwind CSS for crafting beautiful
              interfaces. I follow industry best practices and design patterns
              like Singleton, Prototype, and Observer. Additionally, I have
              experience with Web3.js and blockchain integration, showcasing my
              ability to work with cutting-edge technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Team Player</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Detail Oriented</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Fast Learner</span>
              </div>
            </div>

            <a
              href="/FE_Nguyen-Khanh-Duy.pdf"
              className="inline-flex items-center text-primary font-medium"
              download
            >
              Download Resume
              <span className="ml-2">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
