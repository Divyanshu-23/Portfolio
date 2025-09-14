import ProjectCard from "../Components/ProjectCard";

const projects = [
  { title: "AutoCustomizer", description: "A full stack car customization platform.", link: "https://github.com/Divyanshu-23/AutoCustomizer" },
  { title: "Portfolio Website", description: "My personal portfolio website built with React.", link: "#" },
];

function Projects() {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <h2 className="text-center">Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
