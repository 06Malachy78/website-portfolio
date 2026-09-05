import Hero from '../components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero title="About" subtitle="Computer science student, builder, and creative problem-solver." />

      <main className="container">
        <section className="intro">
          <h2>My Story</h2>
          <p>
            I’m a third-year Computing Science student at the University of East Anglia,
            driven by a strong interest in cybersecurity, game development, and full-stack
            engineering. I enjoy building things end-to-end from designing interfaces and
            architecting databases to deploying production ready applications.
          </p>
          <p>
            My projects, including Checkpoint Hub, a full-stack gaming review and analytics
            platform built with Next.js, Supabase, and IGDB integration, reflect my focus on
            clean UI/UX, scalable systems, and modern development practices.
          </p>
          <p>
            Alongside my technical work, I’ve gained experience in leadership, safeguarding,
            and student support through my role as a Course Coordinator at Oxford Summer
            Courses, and strengthened my communication and teamwork skills through customer-
            facing roles and volunteering. I’m continually expanding my cybersecurity
            knowledge through hands-on learning, certifications, and industry engagement.
          </p>
          <p>
            I’m motivated by solving real problems, learning new technologies, and creating
            meaningful digital experiences — whether in apps, games, or security-focused
            projects.
          </p>
        </section>
      </main>
    </>
  );
}
