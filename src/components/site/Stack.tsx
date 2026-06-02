import { motion } from "framer-motion";
import { SectionHeading } from "./Services";

const groups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Python", "NestJS", "Postgres", "Redis"] },
  { label: "AI", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Hugging Face"] },
  { label: "Cloud", items: ["AWS", "Vercel", "Docker", "Kubernetes", "Cloudflare"] },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Technology" title="A modern, opinionated stack." />
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.07 }}
              className="rounded-2xl glass p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-accent/80">{g.label}</div>
              <ul className="mt-5 space-y-3">
                {g.items.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden mask-marquee">
          <div className="flex gap-8 md:gap-12 animate-marquee whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-display text-muted-foreground/40">
            {[
              ..."React · Next.js · TypeScript · Node.js · Python · OpenAI · Anthropic · LangChain · AWS · Vercel · Docker · Postgres · React · Next.js · TypeScript · Node.js · Python · OpenAI · Anthropic · LangChain · AWS · Vercel · Docker · Postgres".split(
                " · ",
              ),
            ].map((t, i) => (
              <span key={i} className="shrink-0">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
