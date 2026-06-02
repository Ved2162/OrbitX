import logo from "@/assets/orbitx-logo-clean.png";

export function Footer() {
  return (
    <footer className="relative px-5 md:px-6 pb-10 pt-12 md:pt-16 border-t hairline-soft">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="OrbitX" className="w-8 h-8" />
          <div>
            <div className="font-display font-semibold tracking-tight">OrbitX</div>
            <div className="text-xs text-muted-foreground">Building the next era of software.</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} OrbitX Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
