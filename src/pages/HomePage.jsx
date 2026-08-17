import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero title="Welcome" subtitle="Developer • Designer • Creator" />

      <main className="container">
        <section className="intro">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science student and developer who enjoys building apps,
            games, and tools. This site showcases the projects I've created — from
            full-stack web apps to Unity prototypes and cybersecurity labs.
          </p>
          <a className="btn" href="/projects">View My Projects</a>
        </section>
      </main>
    </>
  );
}
