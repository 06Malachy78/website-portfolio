import Hero from '../components/Hero';

const skillGroups = [
  {
    title: 'Development',
    skills: [
      { name: 'JavaScript', description: 'Building interactive web experiences and working with asynchronous APIs.' },
      { name: 'React', description: 'Creating component-based interfaces with reusable page and UI patterns.' },
      { name: 'C# and Unity', description: 'Prototyping gameplay systems, scenes, physics, and player interactions.' },
    ],
  },
  {
    title: 'Web and Data',
    skills: [
      { name: 'Responsive UI design', description: 'Designing layouts that remain clear and usable across screen sizes.' },
      { name: 'Supabase and databases', description: 'Working with hosted data, authentication, and structured information.' },
      { name: 'API integration', description: 'Connecting applications to external services and presenting live data.' },
    ],
  },
  {
    title: 'Security and Systems',
    skills: [
      { name: 'Security fundamentals', description: 'Exploring core security concepts through TryHackMe labs and exercises.' },
      { name: 'Network analysis', description: 'Understanding network behaviour and investigating unfamiliar systems.' },
      { name: 'Risk modelling', description: 'Applying context and evidence to turn raw data into useful warnings.' },
    ],
  },
  {
    title: 'Planning and Design',
    skills: [
      { name: 'Systems analysis', description: 'Turning user needs into models, requirements, and practical system designs.' },
      { name: 'User-centred design', description: 'Using personas, user stories, and testing to improve the experience.' },
      { name: 'Technical documentation', description: 'Explaining technical decisions, findings, and project outcomes clearly.' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      <Hero title="Skills" subtitle="The tools, practices, and ways of thinking behind my projects." />

      <main className="container">
        <section className="intro skills-intro">
          <h2>What I Bring</h2>
          <p>
            I enjoy working across the stack, from early research and system planning
            through to implementation, testing, and refinement.
          </p>
        </section>

        <section className="skills-grid" aria-label="Skills by area">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <p className="skill-description">{skill.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
