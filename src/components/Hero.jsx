// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Hello, I’m Avish</h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
          Building AI-powered web experiences. <br />
          Frontend developer skilled in <span className="font-semibold">HTML, CSS, JavaScript, React, and Tailwind</span>. <br />
          Backend experience with <span className="font-semibold">FastAPI</span>, REST APIs, and databases (<span className="font-semibold">SQL, MongoDB, SQLite</span>). <br />
          Focused on delivering fast, clean UIs and exploring <span className="font-semibold">AI-driven MVPs</span>.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact</a>
          <a className="btn btn-accent" href="https://github.com/Avishgit700" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn btn-outline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          {/* Optional resume; put a PDF in /public/resume.pdf */}
          <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </section>
  );
}
