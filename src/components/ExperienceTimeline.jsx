export default function ExperienceTimeline() {
  const items = [
    {
      role: 'Senior Security Engineer',
      org: 'Cipher Labs',
      period: '2022 — Present',
      bullets: [
        'Led offensive security initiatives across distributed microservices.',
        'Built automated threat modeling pipelines and purple-team playbooks.',
      ],
    },
    {
      role: 'Systems Engineer',
      org: 'Kernel Works',
      period: '2019 — 2022',
      bullets: [
        'Developed kernel modules and hardening policies for container runtimes.',
        'Designed observability stack with eBPF sensors and SIEM integrations.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-black to-[#031a13]">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-2xl text-emerald-300 mb-8">
          > experience_timeline
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-500/30" />
          <ul className="space-y-10">
            {items.map((item, idx) => (
              <li key={idx} className="relative pl-12">
                <span className="absolute left-2 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.6)]" />
                <div className="rounded-lg border border-emerald-400/30 bg-black/60 p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-mono text-lg text-emerald-200">{item.role}</h3>
                    <span className="text-emerald-400/60">@ {item.org}</span>
                    <span className="ml-auto text-emerald-400/60 text-sm">{item.period}</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-emerald-200/90">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
