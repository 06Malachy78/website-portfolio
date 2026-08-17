import Hero from '../components/Hero';

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact" subtitle="Let’s build something interesting together." />

      <main className="container">
        <section className="intro">
          <h2>Get in Touch</h2>
          <p>
            If you’d like to collaborate, ask about a project, or talk through an idea,
            I’d love to hear from you.
          </p>
          <a className="btn" href="mailto:malachy@example.com">malachy@example.com</a>
        </section>
      </main>
    </>
  );
}
