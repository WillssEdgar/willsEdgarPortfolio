import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  technologies: string[];
}

const ExpertiseCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  technologies,
}) => {
  return (
    <div
      className="container bg-gray-500 shadow-lg bg-opacity-70 p-4 rounded-2xl "
      style={{
        minWidth: "305px",
        maxWidth: "380px",
        height: "300px",
      }}
    >
      <img
        className="w-24 h-24 object-cover float-right"
        src={imageSrc}
        alt={title}
        style={{ filter: "invert(100%) grayscale(100%)" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-3xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul className="list-disc">
          {technologies.map((tech, index) => (
            <li key={index} className="text-2xl font-bold text-white">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertiseCard;
