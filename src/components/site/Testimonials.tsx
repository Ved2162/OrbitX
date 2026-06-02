import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "./Services";

const items = [
  {
    q: "OrbitX rebuilt our platform in 90 days. We shipped faster than our last three years combined.",
    n: "Sarah Chen",
    r: "CTO, Helios",
  },
  {
    q: "The closest thing to having a Stripe-grade engineering team on tap. Truly world-class.",
    n: "Marcus Allen",
    r: "Founder, Vertex",
  },
  {
    q: "Their AI agents now run 60% of our customer operations. It's like adding 40 people overnight.",
    n: "Priya Kapoor",
    r: "VP Ops, Atlas",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);
  const item = items[i];

  return (
    <section className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-5xl relative">
        <SectionHeading eyebrow="Voices" title="Loved by the teams we ship with." />
        <div className="mt-12 md:mt-14 relative min-h-[320px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: -8 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-3xl glass-strong shadow-card p-7 sm:p-10 md:p-14 flex flex-col justify-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-display leading-snug text-gradient">
                "{item.q}"
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-semibold">{item.n}</div>
                  <div className="text-sm text-muted-foreground">{item.r}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-4 surface-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
