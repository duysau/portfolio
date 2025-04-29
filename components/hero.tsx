import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="gradient-text">Duy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing. Let&apos;s create something amazing
            together.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" variant="default" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Work</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-20 blur-3xl" />
            <div className="absolute inset-4 bg-background rounded-full shadow-xl flex items-center justify-center overflow-hidden">
              <Image
                src="https://cdn-img.upanhlaylink.com/img/image_20250429f5d51aeb743d00c4f369c64266efd470.jpg"
                alt="Developer Portrait"
                width={384}
                height={384}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
