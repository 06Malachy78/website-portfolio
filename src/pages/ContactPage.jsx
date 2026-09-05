export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-layout">
        <header className="contact-heading">
          <p className="eyebrow">Get in touch</p>
          <h1>Contact</h1>
          <p className="contact-subtitle">Happy to talk internships, graduate roles, CTFs, or anything security-related.</p>
          <p className="contact-note">Tell me what you are working on, what you are looking for, or where you think we could collaborate.</p>
        </header>

        <section className="contact-options" aria-label="Contact options">
          <article className="contact-option">
            <div className="contact-option-heading">
              <span className="contact-icon" aria-hidden="true">@</span>
              <h2>Email</h2>
            </div>
            <p>Best for internships, graduate roles, CTFs, and project conversations.</p>
            <a className="contact-action" href="mailto:malachy78hearnden@gmail.com">
              <span>malachy78hearnden@gmail.com</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </article>

          <article className="contact-option">
            <div className="contact-option-heading">
              <span className="contact-icon" aria-hidden="true">in</span>
              <h2>LinkedIn</h2>
            </div>
            <p>For professional conversations, internships, graduate roles, and networking.</p>
            <a
              className="contact-action"
              href="https://www.linkedin.com/in/malachy-hearnden-84a0aa282/"
              target="_blank"
              rel="noreferrer"
            >
              <span>View my profile</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </article>

          <article className="contact-option">
            <div className="contact-option-heading">
              <span className="contact-icon" aria-hidden="true">*</span>
              <h2>Location</h2>
            </div>
            <p>Based in Norwich for one more year, with Cambridge as my home base.</p>
            <span className="contact-value">UK - open to remote work</span>
          </article>
        </section>
      </div>
    </main>
  );
}
