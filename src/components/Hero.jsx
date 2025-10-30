import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACCESS GRANTED</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.45)] font-mono">
            Hacker Résumé
          </h1>
          <p className="mt-4 text-emerald-200/80 leading-relaxed max-w-2xl font-mono">
            Security-focused engineer with a love for low-level systems, elegant exploits,
            and building resilient, privacy-first products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-emerald-400/40 bg-emerald-500/10 px-5 py-2.5 font-mono text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:bg-emerald-500/20 hover:border-emerald-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-emerald-400/40 px-5 py-2.5 font-mono text-emerald-200 hover:bg-emerald-500/10 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
