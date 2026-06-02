import { motion } from "framer-motion";
import { Activity, Bot, LineChart, Sparkles, Zap } from "lucide-react";
import { SectionHeading } from "./Services";

export function AIShowcase() {
  return (
    <section id="ai" className="relative py-20 md:py-32 px-5 md:px-6 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-50 pointer-events-none" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="AI Showcase"
          title="Intelligence that ships."
          subtitle="From conversational agents to predictive analytics, OrbitX deploys AI that quietly transforms how your business operates."
        />

        <div className="mt-12 md:mt-16 grid lg:grid-cols-5 gap-4 md:gap-5">
          {/* Big dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-3xl glass-strong shadow-card p-6 md:p-8 relative overflow-hidden min-h-[380px] md:min-h-[460px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                Live agent telemetry
              </div>
              <div className="text-xs text-muted-foreground">orbitx://agents</div>
            </div>

            {/* fake chart */}
            <div className="mt-8 h-48 relative">
              <svg viewBox="0 0 400 160" className="w-full h-full">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(0 163 255)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(0 102 255)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 120 C 40 80, 80 100, 120 70 S 200 30, 240 50 S 320 110, 400 40 L 400 160 L 0 160 Z"
                  fill="url(#g1)"
                />
                <path
                  d="M0 120 C 40 80, 80 100, 120 70 S 200 30, 240 50 S 320 110, 400 40"
                  fill="none"
                  stroke="rgb(0 163 255)"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              {[
                { l: "Throughput", v: "12.4k/s" },
                { l: "Accuracy", v: "99.2%" },
                { l: "Latency", v: "78ms" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl surface-1 border hairline p-3">
                  <div className="text-xs text-muted-foreground">{m.l}</div>
                  <div className="text-lg font-semibold">{m.v}</div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          </motion.div>

          <div className="lg:col-span-2 grid gap-4 md:gap-5">
            {[
              {
                icon: Bot,
                title: "AI Agents",
                desc: "Autonomous workers that execute multi-step tasks across your stack.",
              },
              {
                icon: Activity,
                title: "Workflow Automation",
                desc: "Connect tools and decisions into one intelligent pipeline.",
              },
              {
                icon: LineChart,
                title: "Intelligent Analytics",
                desc: "Real-time insights with model-driven recommendations.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl glass p-6 flex gap-4 hover:surface-2 transition"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border hairline flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* secondary row */}
        <div className="mt-4 md:mt-5 grid sm:grid-cols-2 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-6 flex gap-4 items-center"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <div className="text-sm">
              <span className="font-medium">AI chat systems</span>
              <span className="text-muted-foreground">
                {" "}
                — grounded on your data with full citations.
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl glass p-6 flex gap-4 items-center"
          >
            <Zap className="w-5 h-5 text-accent" />
            <div className="text-sm">
              <span className="font-medium">Machine learning</span>
              <span className="text-muted-foreground">
                {" "}
                — custom models tuned for your domain and KPIs.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
