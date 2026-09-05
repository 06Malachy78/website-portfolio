import { useState } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects = projects.filter((project) => {
    const searchableText = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero title="My Projects" subtitle="A collection of apps, games, prototypes, experiments, and coursework from my studies." />

      <main className="container">
        <section className="project-controls" aria-label="Filter projects">
          <label htmlFor="project-search">Search projects</label>
          <input
            id="project-search"
            type="search"
            placeholder="Search by name or technology"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className="category-filters" role="group" aria-label="Project categories">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'filter-button active' : 'filter-button'}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              details={project.details}
              link={project.link}
              tags={project.tags}
              skills={project.skills}
            />
          ))}
        </section>
        {filteredProjects.length === 0 && <p className="empty-state">No projects found.</p>}
      </main>
    </>
  );
}
