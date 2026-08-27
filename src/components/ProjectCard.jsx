export default function ProjectCard({ title, description, link, tags }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        {link === '#' ? 'View Project' : 'Visit Project'}
      </a>
    </div>
  );
}
