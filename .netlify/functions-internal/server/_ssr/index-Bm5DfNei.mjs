import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useTheme } from "./router-DEFv5w95.mjs";
import { m as motion, A as AnimatePresence, u as useMotionValue, a as useSpring, b as useTransform } from "../_libs/framer-motion.mjs";
import { S as Sun, M as Moon, a as Sparkles, A as ArrowRight, B as Brain, C as CodeXml, G as Globe, b as Smartphone, W as Workflow, c as Building2, d as Bot, e as Activity, f as ChartLine, Z as Zap, g as ArrowUpRight, h as Check, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const logo = "/assets/orbitx-logo-clean-CkndVShZ.png";
const links = [
  { label: "Services", href: "#services" },
  { label: "AI", href: "#ai" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed top-3 md:top-4 inset-x-0 z-50 flex justify-center px-3 md:px-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "glass-strong shadow-card rounded-full pl-3 pr-2 py-2 flex items-center gap-4 md:gap-6 w-full max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "OrbitX", className: "h-7 w-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight", children: "OrbitX" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground ml-auto", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-foreground transition-colors duration-200", children: l.label }) }, l.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggle,
            "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
            className: "ml-auto md:ml-0 relative w-9 h-9 rounded-full glass surface-hover flex items-center justify-center overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { y: -16, opacity: 0, rotate: -90 },
                animate: { y: 0, opacity: 1, rotate: 0 },
                exit: { y: 16, opacity: 0, rotate: 90 },
                transition: { duration: 0.25 },
                className: "absolute",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" })
              },
              "sun"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { y: -16, opacity: 0, rotate: -90 },
                animate: { y: 0, opacity: 1, rotate: 0 },
                exit: { y: 16, opacity: 0, rotate: 90 },
                transition: { duration: 0.25 },
                className: "absolute",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" })
              },
              "moon"
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center gap-1.5 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-foreground text-background hover:opacity-90 transition whitespace-nowrap",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Start project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Start" })
            ]
          }
        )
      ] })
    }
  );
}
function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-12, 12]);
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);
  const translateX = useTransform(sx, [-1, 1], [-18, 18]);
  const translateY = useTransform(sy, [-1, 1], [-18, 18]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w * 2 - 1);
      my.set(e.clientY / h * 2 - 1);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden noise",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 aurora-bg pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute rounded-full bg-accent/70",
            style: {
              width: `${1 + i % 3}px`,
              height: `${1 + i % 3}px`,
              top: `${i * 53 % 100}%`,
              left: `${i * 37 % 100}%`,
              opacity: 0.15 + i * 13 % 60 / 100,
              filter: "blur(0.5px)",
              animation: `pulse-glow ${4 + i % 5}s ease-in-out ${i * 0.2}s infinite`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground mb-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Next-generation AI & software engineering" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-semibold lg:leading-[1.02] tracking-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Transforming ideas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "into intelligent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "digital products." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 md:mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "OrbitX builds AI-powered software, scalable applications, and intelligent automation systems that help businesses move faster, operate smarter, and grow without limits." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-glow hover:shadow-glow-strong transition-shadow",
                      children: [
                        "Start your project",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#work",
                      className: "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium glass hover:surface-2 transition",
                      children: "View our work"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              className: "relative h-[340px] sm:h-[460px] lg:h-[560px] flex items-center justify-center",
              style: { perspective: 1200 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-primary/25 blur-[110px] animate-pulse-glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full bg-accent/30 blur-[80px] animate-pulse-glow",
                    style: { animationDelay: "1s" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    style: {
                      rotateX,
                      rotateY,
                      x: translateX,
                      y: translateY,
                      transformStyle: "preserve-3d"
                    },
                    className: "relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] animate-float-slow",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 rounded-full border-2 border-primary/40",
                          style: {
                            transform: "rotateX(70deg)",
                            boxShadow: "0 0 40px oklch(0.62 0.24 255 / 0.4)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-[8%] rounded-full border border-accent/50 animate-spin-slow",
                          style: { transform: "rotateX(70deg) rotateZ(0deg)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-[16%] rounded-full border hairline",
                          style: { transform: "rotateX(70deg) rotateY(30deg)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-[4%] rounded-full border border-accent/25",
                          style: {
                            transform: "rotateY(70deg)",
                            animation: "spin-slow 30s linear infinite reverse"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "absolute inset-0 animate-spin-slow",
                          style: { transformStyle: "preserve-3d" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-primary shadow-glow-strong",
                                style: { transform: "translateZ(40px)" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-glow" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "absolute inset-[10%]",
                          style: {
                            animation: "spin-slow 18s linear infinite reverse",
                            transformStyle: "preserve-3d"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-glow" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 flex items-center justify-center",
                          style: { transform: "translateZ(60px)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] flex items-center justify-center", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute inset-0 rounded-full",
                                style: {
                                  background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.15 240), oklch(0.55 0.25 255) 45%, oklch(0.15 0.1 260) 100%)",
                                  boxShadow: "inset -20px -20px 60px oklch(0 0 0 / 0.6), inset 20px 20px 40px oklch(0.9 0.1 240 / 0.3), 0 0 80px oklch(0.62 0.24 255 / 0.7)"
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "absolute inset-0 rounded-full opacity-60",
                                style: {
                                  background: "radial-gradient(circle at 70% 70%, transparent 50%, oklch(0.70 0.20 240 / 0.4) 100%)"
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center select-none", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: "text-4xl sm:text-5xl font-bold tracking-tight text-white",
                                  style: {
                                    fontFamily: "var(--font-display)",
                                    textShadow: "0 2px 20px oklch(0 0 0 / 0.6), 0 0 30px oklch(0.70 0.20 240 / 0.8)"
                                  },
                                  children: [
                                    "O",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          background: "linear-gradient(135deg, oklch(0.95 0.05 240), oklch(0.75 0.22 255))",
                                          WebkitBackgroundClip: "text",
                                          backgroundClip: "text",
                                          color: "transparent",
                                          textShadow: "none",
                                          filter: "drop-shadow(0 2px 12px oklch(0.70 0.20 240 / 0.9))"
                                        },
                                        children: "X"
                                      }
                                    )
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.4em] text-white/80 mt-1", children: "ORBITX" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[12%] left-[18%] w-16 h-10 rounded-full bg-white/30 blur-xl" })
                          ] })
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" })
      ]
    }
  );
}
const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "LLM apps, AI agents, RAG pipelines, and intelligent automations that learn your business."
  },
  {
    icon: CodeXml,
    title: "Custom Software",
    desc: "Bespoke platforms engineered with modern, scalable, future-proof architecture."
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Performant, beautifully crafted web experiences powered by Next.js and React."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-grade iOS and Android products built with React Native and Swift."
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Workflow orchestration that removes friction across sales, ops, and support."
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    desc: "Secure, compliant, mission-critical software for organizations at scale."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-20 md:py-32 px-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "What we build",
        title: "A complete engineering studio for the AI era.",
        subtitle: "From discovery to scale, OrbitX delivers software that feels inevitable."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6, delay: i * 0.06 },
        className: "group relative rounded-3xl glass shadow-card p-6 md:p-7 overflow-hidden hover:-translate-y-1 transition-transform duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/25 blur-3xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-semibold", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-xs text-muted-foreground/70 uppercase tracking-widest", children: [
              "0",
              i + 1
            ] })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent/80",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-accent/60" }),
          " ",
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.05 },
        className: "mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.1 },
        className: "mt-4 md:mt-5 text-base md:text-lg text-muted-foreground max-w-2xl",
        children: subtitle
      }
    )
  ] });
}
function AIShowcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ai", className: "relative py-20 md:py-32 px-5 md:px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 aurora-bg opacity-50 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "AI Showcase",
          title: "Intelligence that ships.",
          subtitle: "From conversational agents to predictive analytics, OrbitX deploys AI that quietly transforms how your business operates."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 md:mt-16 grid lg:grid-cols-5 gap-4 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "lg:col-span-3 rounded-3xl glass-strong shadow-card p-6 md:p-8 relative overflow-hidden min-h-[380px] md:min-h-[460px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse-glow" }),
                  "Live agent telemetry"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "orbitx://agents" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 h-48 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 160", className: "w-full h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgb(0 163 255)", stopOpacity: "0.6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgb(0 102 255)", stopOpacity: "0" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M0 120 C 40 80, 80 100, 120 70 S 200 30, 240 50 S 320 110, 400 40 L 400 160 L 0 160 Z",
                      fill: "url(#g1)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M0 120 C 40 80, 80 100, 120 70 S 200 30, 240 50 S 320 110, 400 40",
                      fill: "none",
                      stroke: "rgb(0 163 255)",
                      strokeWidth: "2"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-3 text-sm", children: [
                { l: "Throughput", v: "12.4k/s" },
                { l: "Accuracy", v: "99.2%" },
                { l: "Latency", v: "78ms" }
              ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl surface-1 border hairline p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.l }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: m.v })
              ] }, m.l)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl pointer-events-none" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 grid gap-4 md:gap-5", children: [
          {
            icon: Bot,
            title: "AI Agents",
            desc: "Autonomous workers that execute multi-step tasks across your stack."
          },
          {
            icon: Activity,
            title: "Workflow Automation",
            desc: "Connect tools and decisions into one intelligent pipeline."
          },
          {
            icon: ChartLine,
            title: "Intelligent Analytics",
            desc: "Real-time insights with model-driven recommendations."
          }
        ].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.08 },
            className: "rounded-2xl glass p-6 flex gap-4 hover:surface-2 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border hairline flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: f.desc })
              ] })
            ]
          },
          f.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 md:mt-5 grid sm:grid-cols-2 gap-4 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "rounded-2xl glass p-6 flex gap-4 items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "AI chat systems" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  " ",
                  "— grounded on your data with full citations."
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.05 },
            className: "rounded-2xl glass p-6 flex gap-4 items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Machine learning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  " ",
                  "— custom models tuned for your domain and KPIs."
                ] })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
const steps = [
  { n: "01", t: "Discovery", d: "Audit your goals, users, and current systems." },
  { n: "02", t: "Strategy", d: "Architect the roadmap, stack, and success metrics." },
  { n: "03", t: "Design", d: "Craft interfaces that feel inevitable and on-brand." },
  { n: "04", t: "Development", d: "Engineer with modern, scalable architecture." },
  { n: "05", t: "Launch", d: "Ship with confidence, instrumentation, and care." },
  { n: "06", t: "Scale", d: "Iterate continuously with data-driven evolution." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "relative py-20 md:py-32 px-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Process", title: "How OrbitX builds digital excellence." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 md:mt-16 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16 mx-auto rounded-2xl glass-strong flex items-center justify-center shadow-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gradient-primary", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl border border-accent/30" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: s.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: s.d })
            ] })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const touchaskyImg = "/assets/touchasky_poster-DpPj30Wz.png";
const totalhomecareImg = "/assets/totalhomecare_poster-5TCpkb8J.png";
const aurfaImg = "/assets/aurfa_poster-CGP_CAvG.png";
const princefurnitureImg = "/assets/princefurniture_poster-bNgz-ERX.png";
const projects = [
  {
    title: "TouchAsky",
    domain: "touchasky.com",
    url: "https://touchasky.com",
    tag: "Digital Experience",
    desc: "A seamless digital touchpoint delivering immersive sky-high brand experiences.",
    accent: "from-primary/40 to-accent/20",
    image: touchaskyImg
  },
  {
    title: "TotalHomeCare",
    domain: "totalhomecare.in",
    url: "https://totalhomecare.in",
    tag: "Home Services Platform",
    desc: "End-to-end home care solution connecting service professionals with homeowners.",
    accent: "from-accent/40 to-primary/20",
    image: totalhomecareImg
  },
  {
    title: "Aurfa",
    domain: "aurfa.netlify.app",
    url: "https://aurfa.netlify.app",
    tag: "Creative Studio",
    desc: "A modern creative studio showcasing design-forward digital products and services.",
    accent: "from-primary/50 to-accent/30",
    image: aurfaImg
  },
  {
    title: "PrinceFurniture",
    domain: "princefurniture.netlify.app",
    url: "https://princefurniture.netlify.app",
    tag: "E-Commerce & Retail",
    desc: "Premium furniture e-commerce platform with rich product discovery and a smooth checkout experience.",
    accent: "from-accent/40 to-primary/30",
    image: princefurnitureImg
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-20 md:py-32 px-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Featured work",
        title: "Products that look like the future.",
        subtitle: "A glimpse at recent flagship engagements engineered end-to-end by OrbitX."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-5", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.65, delay: i * 0.07 },
        className: "group relative rounded-3xl glass shadow-card overflow-hidden hover:-translate-y-1 transition-transform duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "relative",
                height: "240px",
                overflow: "hidden",
                background: "#000"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: `${p.title} poster`,
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: { position: "absolute", top: 16, left: 16 },
                    className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" }),
                      "Live preview"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: p.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: (e) => e.stopPropagation(),
                    style: { position: "absolute", top: 16, right: 16, zIndex: 10 },
                    className: "w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent/80", children: p.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-semibold", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const rows = [
  ["AI-first development", true, false],
  ["Scalable architecture", true, false],
  ["Modern technology stack", true, false],
  ["Enterprise-grade security", true, false],
  ["Rapid delivery cadence", true, false],
  ["Future-ready systems", true, false]
];
function WhyOrbitX() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 md:py-32 px-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Why OrbitX",
        title: "Built differently from the ground up.",
        subtitle: "A direct comparison with the traditional agency model."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "mt-12 md:mt-14 rounded-3xl glass-strong shadow-card overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-6 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-6 border-l hairline text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent", children: "OrbitX" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: "Future-built studio" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-6 border-l hairline text-center text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-[0.2em]", children: "Traditional" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: "Legacy agency" })
          ] }),
          rows.map(([label, a, b]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-5 border-t hairline", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-5 border-t border-l hairline text-center", children: a ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 sm:w-5 sm:h-5 text-accent inline" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground inline" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 sm:p-5 border-t border-l hairline text-center", children: b ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 sm:w-5 sm:h-5 text-accent inline" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground inline" }) })
          ] }, label))
        ] })
      }
    )
  ] }) });
}
const items = [
  {
    q: "OrbitX rebuilt our platform in 90 days. We shipped faster than our last three years combined.",
    n: "Sarah Chen",
    r: "CTO, Helios"
  },
  {
    q: "The closest thing to having a Stripe-grade engineering team on tap. Truly world-class.",
    n: "Marcus Allen",
    r: "Founder, Vertex"
  },
  {
    q: "Their AI agents now run 60% of our customer operations. It's like adding 40 people overnight.",
    n: "Priya Kapoor",
    r: "VP Ops, Atlas"
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);
  const item = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 md:py-32 px-5 md:px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 aurora-bg opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Voices", title: "Loved by the teams we ship with." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-14 relative min-h-[320px] sm:min-h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30, rotateX: 8 },
          animate: { opacity: 1, y: 0, rotateX: 0 },
          exit: { opacity: 0, y: -30, rotateX: -8 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          className: "absolute inset-0 rounded-3xl glass-strong shadow-card p-7 sm:p-10 md:p-14 flex flex-col justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl sm:text-2xl md:text-3xl font-display leading-snug text-gradient", children: [
              '"',
              item.q,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: item.r })
              ] })
            ] })
          ]
        },
        i
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-2", children: items.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI(idx),
          "aria-label": `Show testimonial ${idx + 1}`,
          className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-4 surface-2"}`
        },
        idx
      )) })
    ] })
  ] });
}
const groups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Python", "NestJS", "Postgres", "Redis"] },
  { label: "AI", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Hugging Face"] },
  { label: "Cloud", items: ["AWS", "Vercel", "Docker", "Kubernetes", "Cloudflare"] }
];
function Stack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "relative py-20 md:py-32 px-5 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Technology", title: "A modern, opinionated stack." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: gi * 0.07 },
        className: "rounded-2xl glass p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent/80", children: g.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: g.items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t })
          ] }, t)) })
        ]
      },
      g.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-16 overflow-hidden mask-marquee", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 md:gap-12 animate-marquee whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-display text-muted-foreground/40", children: [
      ..."React · Next.js · TypeScript · Node.js · Python · OpenAI · Anthropic · LangChain · AWS · Vercel · Docker · Postgres · React · Next.js · TypeScript · Node.js · Python · OpenAI · Anthropic · LangChain · AWS · Vercel · Docker · Postgres".split(
        " · "
      )
    ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: t }, i)) }) })
  ] }) });
}
const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI / ML Solution",
  "E-Commerce",
  "SaaS Platform",
  "Other"
];
function Contact() {
  const [status, setStatus] = reactExports.useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-28 md:py-36 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 aurora-bg opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-6", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gradient mb-4", children: "Let's Build Something Great" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-lg", children: "Have a project in mind? Fill out the form below and we'll get back to you within 24 hours." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.15 },
          className: "max-w-2xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
              className: "text-center py-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-8 h-8 text-green-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2.5,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "Message Sent!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "We'll get back to you within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setStatus("idle"),
                    className: "px-6 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity",
                    children: "Send Another Message"
                  }
                )
              ]
            },
            "success"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onSubmit: handleSubmit,
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "hidden",
                    name: "access_key",
                    value: "0c1997ef-e9e8-4ef5-9c20-15412adc1f5d"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "subject", value: "New Contact Form Submission — OrbitX" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "from_name", value: "OrbitX Website" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "botcheck", className: "hidden" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-name", className: "block text-sm font-medium mb-2", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-name",
                        name: "name",
                        type: "text",
                        required: true,
                        placeholder: "Your name",
                        className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-email", className: "block text-sm font-medium mb-2", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-email",
                        name: "email",
                        type: "email",
                        required: true,
                        placeholder: "you@example.com",
                        className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contact-company", className: "block text-sm font-medium mb-2", children: [
                      "Company ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "contact-company",
                        name: "company",
                        type: "text",
                        placeholder: "Your company",
                        className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "contact-project-type",
                        className: "block text-sm font-medium mb-2",
                        children: "Project Type"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "contact-project-type",
                        name: "project_type",
                        required: true,
                        className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none cursor-pointer",
                        defaultValue: "",
                        style: { colorScheme: "light dark" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "option",
                            {
                              value: "",
                              disabled: true,
                              className: "text-muted-foreground",
                              style: { background: "var(--background)", color: "var(--foreground)" },
                              children: "Select a project type"
                            }
                          ),
                          projectTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "option",
                            {
                              value: t,
                              style: { background: "var(--background)", color: "var(--foreground)" },
                              children: t
                            },
                            t
                          ))
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-message", className: "block text-sm font-medium mb-2", children: "Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "contact-message",
                      name: "message",
                      required: true,
                      rows: 5,
                      placeholder: "Tell us about your project…",
                      className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Something went wrong. Please try again or email us directly." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setStatus("idle"),
                          className: "ml-3 underline font-medium hover:opacity-80",
                          children: "Retry"
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: status === "loading",
                    className: "w-full py-3.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-glow",
                    children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            strokeDasharray: "60",
                            strokeLinecap: "round",
                            className: "opacity-30"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M12 2a10 10 0 0 1 10 10",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            strokeLinecap: "round"
                          }
                        )
                      ] }),
                      "Sending…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Send Message",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M13 7l5 5m0 0l-5 5m5-5H6"
                            }
                          )
                        }
                      )
                    ] })
                  }
                )
              ]
            },
            "form"
          ) })
        }
      )
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative px-5 md:px-6 pb-10 pt-12 md:pt-16 border-t hairline-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "OrbitX", className: "w-8 h-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold tracking-tight", children: "OrbitX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Building the next era of software." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " OrbitX Technologies. All rights reserved."
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIShowcase, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyOrbitX, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
