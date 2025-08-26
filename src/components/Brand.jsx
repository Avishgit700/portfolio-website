export default function Brand() {
  const colors = [
    { name: "brand-500", class: "bg-brand" },
    { name: "brand-600", class: "bg-brand-600" },
    { name: "accent-500", class: "bg-accent-500" },
    { name: "accent-600", class: "bg-accent-600" },
  ];
  const grays = ["slate-100","slate-200","slate-300","slate-700","slate-900"];

  return (
    <section id="brand" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold">Brand Style</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Color tokens, buttons, cards, and tags you can reuse across the site.
        </p>

        {/* Colors */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold mb-3">Brand colors</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map(c => (
                <div key={c.name} className="flex items-center gap-2">
                  <span className={`h-8 w-8 rounded-xl ${c.class}`}></span>
                  <code className="text-sm">{c.name}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3">Neutral scale</h3>
            <div className="flex items-center gap-2">
              {grays.map(g => (
                <span key={g} className={`h-6 w-6 rounded ${`bg-${g}`}`}></span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-3">Typography</h3>
            <p className="text-2xl font-bold leading-tight">Display / H1</p>
            <p className="mt-1 text-lg">Subtitle / lead</p>
            <p className="mt-1 text-sm text-slate-500">Caption / helper</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 card">
          <h3 className="font-semibold mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>

        {/* Cards & tags */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="card">
            <h4 className="text-xl font-semibold">Card title</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              A reusable card with blur, border, and soft shadow.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="tag">React</span>
              <span className="tag">Tailwind</span>
              <span className="tag">FastAPI</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a className="btn btn-primary" href="#!">Primary</a>
              <a className="btn btn-outline" href="#!">Outline</a>
            </div>
          </article>

          <article className="card">
            <h4 className="text-xl font-semibold">Another card</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Use tags for tech stacks or statuses.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="tag">MongoDB</span>
              <span className="tag">SQLite</span>
              <span className="tag">Python (beginner)</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
