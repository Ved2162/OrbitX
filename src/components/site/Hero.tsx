import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-12, 12]);
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);
  const translateX = useTransform(sx, [-1, 1], [-18, 18]);
  const translateY = useTransform(sy, [-1, 1], [-18, 18]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w) * 2 - 1);
      my.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden noise"
    >
      <div className="absolute inset-0 aurora-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-accent/70"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              opacity: 0.15 + ((i * 13) % 60) / 100,
              filter: "blur(0.5px)",
              animation: `pulse-glow ${4 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground mb-7">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Next-generation AI & software engineering</span>
          </div>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-semibold lg:leading-[1.02] tracking-tight">
            <span className="text-gradient">Transforming ideas</span>
            <br />
            <span className="text-gradient">into intelligent</span>
            <br />
            <span className="text-gradient-primary">digital products.</span>
          </h1>
          <p className="mt-6 md:mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            OrbitX builds AI-powered software, scalable applications, and intelligent automation
            systems that help businesses move faster, operate smarter, and grow without limits.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              Start your project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium glass hover:surface-2 transition"
            >
              View our work
            </a>
          </div>
        </motion.div>

        {/* Logo visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[340px] sm:h-[460px] lg:h-[560px] flex items-center justify-center"
          style={{ perspective: 1200 }}
        >
          {/* halo */}
          <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-primary/25 blur-[110px] animate-pulse-glow" />
          <div
            className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full bg-accent/30 blur-[80px] animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />

          {/* 3D orbit system */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] animate-float-slow"
          >
            {/* Orbit rings tilted in 3D */}
            <div
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              style={{
                transform: "rotateX(70deg)",
                boxShadow: "0 0 40px oklch(0.62 0.24 255 / 0.4)",
              }}
            />
            <div
              className="absolute inset-[8%] rounded-full border border-accent/50 animate-spin-slow"
              style={{ transform: "rotateX(70deg) rotateZ(0deg)" }}
            />
            <div
              className="absolute inset-[16%] rounded-full border hairline"
              style={{ transform: "rotateX(70deg) rotateY(30deg)" }}
            />
            <div
              className="absolute inset-[4%] rounded-full border border-accent/25"
              style={{
                transform: "rotateY(70deg)",
                animation: "spin-slow 30s linear infinite reverse",
              }}
            />

            {/* Orbiting planets */}
            <div
              className="absolute inset-0 animate-spin-slow"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-primary shadow-glow-strong"
                style={{ transform: "translateZ(40px)" }}
              />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-glow" />
            </div>
            <div
              className="absolute inset-[10%]"
              style={{
                animation: "spin-slow 18s linear infinite reverse",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-glow" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80" />
            </div>

            {/* Central 3D core */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: "translateZ(60px)" }}
            >
              <div className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] flex items-center justify-center">
                {/* Sphere layers */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, oklch(0.85 0.15 240), oklch(0.55 0.25 255) 45%, oklch(0.15 0.1 260) 100%)",
                    boxShadow:
                      "inset -20px -20px 60px oklch(0 0 0 / 0.6), inset 20px 20px 40px oklch(0.9 0.1 240 / 0.3), 0 0 80px oklch(0.62 0.24 255 / 0.7)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 70%, transparent 50%, oklch(0.70 0.20 240 / 0.4) 100%)",
                  }}
                />
                {/* OrbitX wordmark on sphere */}
                <div className="relative text-center select-none">
                  <div
                    className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                      textShadow:
                        "0 2px 20px oklch(0 0 0 / 0.6), 0 0 30px oklch(0.70 0.20 240 / 0.8)",
                    }}
                  >
                    O
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.95 0.05 240), oklch(0.75 0.22 255))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        textShadow: "none",
                        filter: "drop-shadow(0 2px 12px oklch(0.70 0.20 240 / 0.9))",
                      }}
                    >
                      X
                    </span>
                  </div>
                  <div className="text-[10px] tracking-[0.4em] text-white/80 mt-1">ORBITX</div>
                </div>
                {/* Highlight */}
                <div className="absolute top-[12%] left-[18%] w-16 h-10 rounded-full bg-white/30 blur-xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
