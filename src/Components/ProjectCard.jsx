function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', margin: '10px', transition: '0.3s', width: '300px' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#00aaff', display: 'block', marginTop: '10px' }}>View Project</a>
    </div>
  );
}

export default ProjectCard;
