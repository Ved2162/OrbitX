import { motion } from "framer-motion";
import { SectionHeading } from "./Services";

const steps = [
  { n: "01", t: "Discovery", d: "Audit your goals, users, and current systems." },
  { n: "02", t: "Strategy", d: "Architect the roadmap, stack, and success metrics." },
  { n: "03", t: "Design", d: "Craft interfaces that feel inevitable and on-brand." },
  { n: "04", t: "Development", d: "Engineer with modern, scalable architecture." },
  { n: "05", t: "Launch", d: "Ship with confidence, instrumentation, and care." },
  { n: "06", t: "Scale", d: "Iterate continuously with data-driven evolution." },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Process" title="How OrbitX builds digital excellence." />
        <div className="mt-12 md:mt-16 relative">
          <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative w-16 h-16 mx-auto rounded-2xl glass-strong flex items-center justify-center shadow-glow">
                  <span className="text-sm font-semibold text-gradient-primary">{s.n}</span>
                  <div className="absolute inset-0 rounded-2xl border border-accent/30" />
                </div>
                <div className="mt-5 text-center">
                  <div className="font-semibold">{s.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
