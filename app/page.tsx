import React from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
