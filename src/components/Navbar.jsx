export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold">Avish Kunwar</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#brand">Brand</a>
<a href="https://github.com/Avishgit700" target="_blank" rel="noreferrer">GitHub ↗</a>
<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>

        </nav>
      </div>
    </header>
  );
}
