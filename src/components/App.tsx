// src/App.tsx
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import other sections…

export default function App() {
  return (
    <div>
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-semibold">Avish Kunwar</h1>
          <nav className="flex items-center gap-4">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* hero */}
        <section className="py-16">
          <h2 className="text-4xl font-bold tracking-tight">Hello, I’m Avish</h2>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
            Building AI-powered web experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
        </section>

        {/* sections */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Projects />
          </div>
        </section>

        <Experience />
        {/* Skills, About, Contact… */}
      </main>

      <footer className="mt-20 py-10 text-center text-sm text-slate-500">
        © 2025 Avish Kunwar • <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
