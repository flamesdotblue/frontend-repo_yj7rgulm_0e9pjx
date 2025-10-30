export default function TerminalAbout() {
  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-lg border border-emerald-400/30 bg-black/70 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
          <div className="flex items-center justify-between border-b border-emerald-400/20 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/50" />
            </div>
            <span className="font-mono text-xs text-emerald-300/80">/usr/bin/about.sh</span>
          </div>

          <div className="p-6 font-mono text-emerald-200">
            <p className="text-emerald-300">$ whoami</p>
            <p className="mb-6 text-emerald-200/90">security_engineer</p>

            <p className="text-emerald-300">$ cat profile.txt</p>
            <p className="mt-2 mb-6 text-emerald-200/90 leading-relaxed">
              Developer with a penchant for binaries, networks, and clean abstractions. I design
              systems that are hard to break and delightful to debug.
            </p>

            <p className="text-emerald-300">$ skills --top</p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Offensive Security',
                'Reverse Engineering',
                'Rust / Go / Python',
                'Linux / Networking',
                'Cloud Security',
                'Web App Hardening',
              ].map((item) => (
                <li key={item} className="text-emerald-200/90">
                  ▸ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
