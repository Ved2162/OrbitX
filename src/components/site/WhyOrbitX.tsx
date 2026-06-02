import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "./Services";

const rows = [
  ["AI-first development", true, false],
  ["Scalable architecture", true, false],
  ["Modern technology stack", true, false],
  ["Enterprise-grade security", true, false],
  ["Rapid delivery cadence", true, false],
  ["Future-ready systems", true, false],
] as const;

export function WhyOrbitX() {
  return (
    <section className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why OrbitX"
          title="Built differently from the ground up."
          subtitle="A direct comparison with the traditional agency model."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-14 rounded-3xl glass-strong shadow-card overflow-hidden"
        >
          <div className="grid grid-cols-3 text-xs sm:text-sm">
            <div className="p-3 sm:p-6 text-muted-foreground" />
            <div className="p-3 sm:p-6 border-l hairline text-center">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent">
                OrbitX
              </div>
              <div className="mt-1 font-semibold">Future-built studio</div>
            </div>
            <div className="p-3 sm:p-6 border-l hairline text-center text-muted-foreground">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em]">Traditional</div>
              <div className="mt-1 font-semibold">Legacy agency</div>
            </div>
            {rows.map(([label, a, b]) => (
              <div key={label} className="contents">
                <div className="p-3 sm:p-5 border-t hairline">{label}</div>
                <div className="p-3 sm:p-5 border-t border-l hairline text-center">
                  {a ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent inline" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground inline" />
                  )}
                </div>
                <div className="p-3 sm:p-5 border-t border-l hairline text-center">
                  {b ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent inline" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground inline" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
