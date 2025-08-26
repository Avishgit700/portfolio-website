export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-3">
          Email: <a className="underline" href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <div className="mt-4 flex gap-3">
          <a className="btn" href="https://github.com/Avishgit700" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
