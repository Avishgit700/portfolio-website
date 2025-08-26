const items = [
  {
    title: "Weather Pro",
    desc: "Weather dashboard with API + caching",
    tags: ["React", "Vite"],
    repo: "https://github.com/Avishgit700/01-weather-dashboard",
    live: "#"
  },
  {
    title: "Task Manager",
    desc: "Fast task manager with local storage",
    tags: ["React", "Tailwind"],
    repo: "https://github.com/Avishgit700/02-task-manager",
    live: "#"
  },
  {
    title: "AI Business Insights (MVP)",
    desc: "Analytics dashboard with AI text analysis + charts",
    tags: ["React", "Tailwind", "OpenAI API"],
    repo: "https://github.com/Avishgit700",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(p => (
            <article key={p.title} className="card p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Code</a>
                {p.live && p.live !== "#" && (
                  <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
