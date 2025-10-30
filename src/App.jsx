import Hero from './components/Hero';
import TerminalAbout from './components/TerminalAbout';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-200">
      {/* Hero with Spline background */}
      <Hero />

      {/* About in terminal style */}
      <TerminalAbout />

      {/* Experience timeline */}
      <ExperienceTimeline />

      {/* Projects */}
      <ProjectsGrid />

      {/* Simple contact/footer section */}
      <section id="contact" className="py-16 border-t border-emerald-400/20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="font-mono text-xl text-emerald-300 mb-4">&gt; contact</h3>
            <p className="text-emerald-200/80 font-mono">
              Want to collaborate or chat security? Reach me at
              <a className="text-emerald-300 hover:underline ml-2" href="mailto:me@cyber.resume">me@cyber.resume</a>
            </p>
          </div>
          <p className="mt-12 text-xs text-emerald-400/50 font-mono">
            Crafted in dark mode. No trackers. Stay curious.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
