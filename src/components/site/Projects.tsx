import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Services";
import touchaskyImg from "@/assets/touchasky_poster.png";
import totalhomecareImg from "@/assets/totalhomecare_poster.png";
import aurfaImg from "@/assets/aurfa_poster.png";
const stitchoriaImg = "https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=photorealistic%20elegant%20sewing%20and%20textile%20workshop%20poster%20with%20colorful%20threads%20fabric%20swatches%20and%20vintage%20sewing%20machine%20on%20dark%20moody%20background%20high%20quality%208k&image_size=square_hd";

const projects = [
  {
    title: "TouchAsky",
    domain: "touchasky.com",
    url: "https://touchasky.com",
    tag: "Digital Experience",
    desc: "A seamless digital touchpoint delivering immersive sky-high brand experiences.",
    accent: "from-primary/40 to-accent/20",
    image: touchaskyImg,
  },
  {
    title: "TotalHomeCare",
    domain: "totalhomecare.in",
    url: "https://totalhomecare.in",
    tag: "Home Services Platform",
    desc: "End-to-end home care solution connecting service professionals with homeowners.",
    accent: "from-accent/40 to-primary/20",
    image: totalhomecareImg,
  },
  {
    title: "Aurfa",
    domain: "aurfa.netlify.app",
    url: "https://aurfa.netlify.app",
    tag: "Creative Studio",
    desc: "A modern creative studio showcasing design-forward digital products and services.",
    accent: "from-primary/50 to-accent/30",
    image: aurfaImg,
  },
  {
    title: "Stitchoria",
    domain: "stitchoria.vercel.app",
    url: "https://stitchoria.vercel.app/",
    tag: "Fashion & Textiles",
    desc: "A modern platform for textile and sewing enthusiasts, featuring elegant fabric collections and creative sewing resources.",
    accent: "from-accent/40 to-primary/30",
    image: stitchoriaImg,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured work"
          title="Products that look like the future."
          subtitle="A glimpse at recent flagship engagements engineered end-to-end by OrbitX."
        />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.07 }}
              className="group relative rounded-3xl glass shadow-card overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div
                style={{
                  position: "relative",
                  height: "240px",
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <img
                  src={p.image}
                  alt={`${p.title} poster`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                />
                <div
                  style={{ position: "absolute", top: 16, left: 16 }}
                  className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                  Live preview
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="p-6 md:p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-accent/80">{p.tag}</div>
                <div className="mt-3 text-2xl font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
