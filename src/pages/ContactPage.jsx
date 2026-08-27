import Hero from '../components/Hero';

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact" subtitle="Let’s build something interesting together." />

      <main className="container">
        <section className="intro contact-intro">
          <h2>Get in Touch</h2>
          <p>
            If you’d like to collaborate, ask about a project, or talk through an idea,
            I’d love to hear from you.
          </p>
        </section>

        <section className="contact-options" aria-label="Contact options">
          <article className="contact-option">
            <p className="eyebrow">Email</p>
            <h2>Send me a message</h2>
            <a className="btn" href="mailto:malachyhearnden@hotmail.co.uk">malachyhearnden@hotmail.co.uk</a>
          </article>

          <article className="contact-option">
            <p className="eyebrow">LinkedIn</p>
            <h2>Connect with me</h2>
            <a
              className="btn"
              href="https://www.linkedin.com/in/malachy-hearnden-84a0aa282/"
              target="_blank"
              rel="noreferrer"
            >
              View my LinkedIn
            </a>
          </article>
        </section>
      </main>
    </>
  );
}
