"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import "./styles.scss";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold navbar-gradient-text">
          Duy Nguyen
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-8">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="nav-link hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="nav-link hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="nav-link hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="nav-link hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="nav-link hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
