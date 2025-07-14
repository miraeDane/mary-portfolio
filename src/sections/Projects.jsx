import philsafe from "../assets/philsafe.png";
import suroyta from "../assets/suroyta.png";
import qt from "../assets/qt.png";
import resume from "../assets/resume.png";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      photo: philsafe,
      projectName: "Philsafe",
      description: "An online crime reporting system integrated with crime mapping and profiling features. Designed to enhance public safety, Philsafe allows users to report incidents, track crime hotspots on an interactive map, and access detailed profiles for improved law enforcement response and community awareness.",
    },

    {
      photo: qt,
      projectName: "Quiet Time",
      description: "A faith-based app designed to help users grow in their relationship with God. It features verse of the day, scripture reflections, and prayer request form to encourage daily spiritual habits and meaningful stillness.",
    },
    {
      photo: resume,
      projectName: "Resume Generator",
      description: "A user-friendly resume builder optimized for ATS (Applicant Tracking Systems). This tool helps job seekers create clean, structured, and keyword-rich resumes that increase their chances of passing automated screening and landing interviews.",
    },
    {
      photo: suroyta,
      projectName: "Suroy Ta",
      description: "A smart travel itinerary planner that suggests personalized trip plans based on the user’s destination, interests, and budget. Users can also customize their itinerary for a flexible, hassle-free travel experience. Ideal for exploring the Philippines and beyond.",
    },
  ];

  return (
    <>
    <div className="parent-header">
<div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">
            Explore my latest projects that showcase my skills and creativity.
        </p>
    </div>
    </div>
    
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.photo}
              alt={project.projectTitle}
              className="project-image"
            />
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
