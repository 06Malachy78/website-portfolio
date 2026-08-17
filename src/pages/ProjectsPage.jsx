import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Hero title="My Projects" subtitle="A collection of apps, games, prototypes, and experiments." />

      <main className="container">
        <section className="project-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </>
  );
}
