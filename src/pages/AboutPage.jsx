import Hero from '../components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero title="About" subtitle="Computer science student, builder, and creative problem-solver." />

      <main className="container">
        <section className="intro">
          <h2>My Story</h2>
          <p>
            I’m a Computer Science student fascinated by software engineering,
            game design, cybersecurity, and solving technical challenges with clean,
            practical solutions.
          </p>
          <p>
            My work spans web apps, game prototypes, and security-focused learning,
            with a strong focus on usability, systems thinking, and building things that
            are both functional and memorable.
          </p>
        </section>
      </main>
    </>
  );
}
