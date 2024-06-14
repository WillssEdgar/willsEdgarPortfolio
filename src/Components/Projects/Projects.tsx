import React from "react";
import ProjectCard from "./ProjectCard";
import madeByWillsPreview from "../../assets/MadeByWillsPreview.png";

const Projects: React.FC = () => {
  return (
    <div>
      <div
        className="projects container "
        id="projects"
      >
        <h5 className="mb-3 text-6xl p-10 text-center text-gray-700 font-bold">
          Projects
        </h5>
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard
            imageSrc={madeByWillsPreview}
            title="Made By Wills"
            description="A React driven TypeScript web application for my woodworking company."
            tags={["React", "TypeScript", "CSS"]}
            lastUpdated="3/3/2024"
          />

          <ProjectCard
            imageSrc={madeByWillsPreview}
            title="WSE Banking"
            description="A full stack Banking Application built with Java."
            tags={[
              "Java",
              "Spring Boot",
              "PostgreSQL",
              "Bootstrap",
              "React",
              "TypeScript",
            ]}
            lastUpdated="04/03/24"
          />
          <ProjectCard
            imageSrc={madeByWillsPreview}
            title="Mood Waves"
            description="A wellness app for UNCW created with flutter."
            tags={["Flutter", "Firebase"]}
            lastUpdated="04/03/24"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
