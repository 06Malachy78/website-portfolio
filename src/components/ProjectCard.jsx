import { useState } from 'react';

export default function ProjectCard({ title, description, details, link, tags, skills }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={isExpanded ? 'project-card expanded' : 'project-card'}>
      <button
        className="project-toggle"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        <span>
          <span className="project-toggle-label">Project</span>
          <strong>{title}</strong>
        </span>
        <span className="project-toggle-icon" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
      </button>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {isExpanded && (
        <div className="project-details">
          <p>{details}</p>
          <h3>Skills gained</h3>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      )}
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        {link === '#' ? 'View Project' : 'Visit Project'}
      </a>
    </article>
  );
}
