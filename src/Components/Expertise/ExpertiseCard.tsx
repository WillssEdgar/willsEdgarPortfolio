import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  technologies,
}) => {
  return (
    <div
      className="container bg-gray-700 text-white p-4 rounded-3xl shadow-lg"
      style={{
        boxShadow: "5px 5px 20px black",
        minWidth: "305px",
        maxWidth: "380px",
      }}
    >
      <img
        className="w-24 h-24 object-cover float-right"
        style={{ filter: "invert(100%)" }}
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul className="list-disc">
          {technologies.map((tech, index) => (
            <li key={index} className="text-2xl">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
