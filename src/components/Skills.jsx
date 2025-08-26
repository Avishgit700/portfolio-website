// src/components/Skills.jsx
const groups = [
  {
    name: "Frontend",
    items: [
      "HTML", "CSS", "JavaScript (ES6+)", "React", "Vite", "Tailwind",
      "Responsive UI", "Landing Pages", "Portfolio Sites",
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      "Node.js (basic)", "Express (basic)", "FastAPI (Python)",
      "REST APIs", "Auth (JWT/session)", "CORS",
    ],
  },
  {
    name: "Databases",
    items: [
      "SQL (basics)", "SQLite", "PostgreSQL (learning)", "MongoDB (basics)",
      "Schema design (simple)", "CRUD",
    ],
  },
  {
    name: "Python",
    items: ["Python (beginner)", "Data workflows (basic)", "Scripting"],
  },
  {
    name: "AI / MVP",
    items: [
      "AI MVP prototyping", "OpenAI API", "Hugging Face (spaces/models)",
      "Prompt design", "Chat/summarize features", "AI-assisted UX",
    ],
  },
  {
    name: "Tooling & DX",
    items: [
      "Git & GitHub", "Vercel (frontend)", "Render/Railway (APIs)",
      "Docker (learning)", "Figma (UI drafts)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <article key={g.name} className="card p-5">
              <h3 className="font-semibold text-lg">{g.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
