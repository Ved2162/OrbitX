import logo from "@/assets/orbitx-logo-clean.png";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const links = [
  { label: "Services", href: "#services" },
  { label: "AI", href: "#ai" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 md:top-4 inset-x-0 z-50 flex justify-center px-3 md:px-4"
    >
      <nav className="glass-strong shadow-card rounded-full pl-3 pr-2 py-2 flex items-center gap-4 md:gap-6 w-full max-w-3xl">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="OrbitX" className="h-7 w-7" />
          <span className="font-display font-semibold tracking-tight">OrbitX</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground ml-auto">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="ml-auto md:ml-0 relative w-9 h-9 rounded-full glass surface-hover flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.span
                key="sun"
                initial={{ y: -16, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 16, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.25 }}
                className="absolute"
              >
                <Sun className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ y: -16, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 16, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.25 }}
                className="absolute"
              >
                <Moon className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-foreground text-background hover:opacity-90 transition whitespace-nowrap"
        >
          <span className="hidden sm:inline">Start project</span>
          <span className="sm:hidden">Start</span>
        </a>
      </nav>
    </motion.header>
  );
}
