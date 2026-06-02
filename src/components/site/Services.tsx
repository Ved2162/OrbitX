import { motion } from "framer-motion";
import { Brain, Code2, Globe, Smartphone, Workflow, Building2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "LLM apps, AI agents, RAG pipelines, and intelligent automations that learn your business.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke platforms engineered with modern, scalable, future-proof architecture.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Performant, beautifully crafted web experiences powered by Next.js and React.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-grade iOS and Android products built with React Native and Swift.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Workflow orchestration that removes friction across sales, ops, and support.",
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    desc: "Secure, compliant, mission-critical software for organizations at scale.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we build"
          title="A complete engineering studio for the AI era."
          subtitle="From discovery to scale, OrbitX delivers software that feels inevitable."
        />
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-3xl glass shadow-card p-6 md:p-7 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/25 blur-3xl" />
              </div>
              <div className="relative">
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border hairline">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="mt-4 text-xs text-muted-foreground/70 uppercase tracking-widest">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent/80"
      >
        <span className="w-6 h-px bg-accent/60" /> {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 md:mt-5 text-base md:text-lg text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
