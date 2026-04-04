const services = [
  { name: "Residential Construction", desc: "Building modern homes with smart technology integration, energy efficiency, and sustainable materials.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-4 0h4" },
  { name: "Commercial Buildings", desc: "State-of-the-art office complexes, retail spaces, and commercial properties designed for the future of work.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Infrastructure Development", desc: "Roads, bridges, and public infrastructure built with cutting-edge engineering and AI-optimized planning.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
  { name: "Smart Home Integration", desc: "IoT-enabled home automation, smart security systems, and energy management built into every project.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { name: "Project Management", desc: "End-to-end project management with AI-powered scheduling, resource optimization, and real-time tracking.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { name: "Renovation & Remodeling", desc: "Transform existing spaces with modern designs, structural upgrades, and smart technology retrofitting.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white text-xs">SJA</div>
            <span className="text-lg font-bold">SJA Constructions</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-amber-400 transition-colors">sja.com</a>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-mono mb-4 tracking-wider uppercase">Smart Construction</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Building the<br /><span className="text-amber-400">Future</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">Smart construction and infrastructure development powered by automation, robotics-assisted building, and intelligent project management.</p>
          <a href="#services" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Our Services</a>
        </div>
      </section>
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-mono mb-3 tracking-wider uppercase">What We Build</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Our <span className="text-amber-400">Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl bg-surface border border-border hover:border-amber-400/30 p-6 transition-all hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-amber-400">Mission</span></h2>
          <p className="text-foreground/60 leading-relaxed">SJA Constructions is redefining how we build. By integrating AI, robotics, and sustainable practices into every project, we create structures that are not just buildings — they are intelligent, efficient, and built to last for generations.</p>
        </div>
      </section>
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-amber-400 hover:underline">SJA Ecosystem</a></p>
          <p className="text-foreground/30 text-xs mt-2">&copy; 2025 SJA Constructions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
