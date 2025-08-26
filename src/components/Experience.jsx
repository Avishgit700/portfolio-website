const roles = [
  {
    company: "Freelance",
    title: "Frontend Developer",
    period: "2023–Present",
    points: [
      "Built SPAs with React + Tailwind",
      "Integrated APIs and auth",
      "Improved Lighthouse scores 90+"
    ],
  },
  {
    company: "AI Tools & Integrations",
    title: "Prototype Builder (MVP)",
    period: "2024–Present",
    points: [
      "Integrated OpenAI/Hugging Face APIs into React apps",
      "Shipped MVPs with chat, summarization, analytics",
      "Designed AI-assisted UX and prompt tooling"
    ],
  },
  {
    company: "Full-Stack Self Projects",
    title: "Developer",
    period: "2024–Present",
    points: [
      "APIs with Node/Express; auth + REST",
      "Data: SQL, SQLite, MongoDB basics",
      "Python beginner data workflows"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {roles.map(r => (
            <div key={r.company + r.title} className="card p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{r.title} · {r.company}</h3>
                <span className="text-sm text-slate-500">{r.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                {r.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
