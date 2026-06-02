import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";

import { Services } from "@/components/site/Services";
import { AIShowcase } from "@/components/site/AIShowcase";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { WhyOrbitX } from "@/components/site/WhyOrbitX";
import { Testimonials } from "@/components/site/Testimonials";
import { Stack } from "@/components/site/Stack";
import { Contact } from "../components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OrbitX" },
      {
        name: "description",
        content:
          "OrbitX is a next-generation technology studio building AI solutions, custom software, web & mobile apps, and intelligent automation for ambitious businesses.",
      },
      { property: "og:title", content: "OrbitX — AI-powered software, built for the future" },
      {
        property: "og:description",
        content:
          "AI solutions, custom software, web & mobile apps, and intelligent automation for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <AIShowcase />
        <Process />
        <Projects />
        <WhyOrbitX />
        <Testimonials />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
