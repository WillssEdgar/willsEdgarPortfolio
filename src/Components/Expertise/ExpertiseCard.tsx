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
      className="container bg-slate-300 bg-opacity-75 p-4 rounded-2xl "
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
      />
      <div className="px-6 py-4">
        <div className="font-bold text-slate-700 text-3xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul className="list-disc">
          {technologies.map((tech, index) => (
            <li key={index} className="text-2xl font-bold text-slate-700">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertiseCard;
