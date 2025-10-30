export default function ProjectsGrid() {
  const projects = [
    {
      name: 'GhostTrace',
      desc: 'Open-source network traffic cloaking with pluggable transports.',
      link: '#',
      tags: ['Rust', 'WireGuard', 'eBPF'],
    },
    {
      name: 'VaultKit',
      desc: 'CLI toolkit for secrets management with hardware-backed keys.',
      link: '#',
      tags: ['Go', 'YubiKey', 'FIDO2'],
    },
    {
      name: 'HexScope',
      desc: 'Binary inspection UI with smart diff and function discovery.',
      link: '#',
      tags: ['React', 'WASM', 'Reverse'],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-2xl text-emerald-300 mb-8">&gt; featured_projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="group rounded-lg border border-emerald-400/30 bg-gradient-to-b from-[#04150f] to-black p-5 hover:border-emerald-300/60 transition shadow-[0_0_32px_rgba(16,185,129,0.08)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-lg text-emerald-200 group-hover:text-emerald-300">
                  {p.name}
                </h3>
                <span className="text-xs text-emerald-400/60">open</span>
              </div>
              <p className="mt-2 text-sm text-emerald-200/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
