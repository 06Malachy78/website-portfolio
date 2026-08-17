export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        {link === '#' ? 'View Project' : 'Visit Project'}
      </a>
    </div>
  );
}
