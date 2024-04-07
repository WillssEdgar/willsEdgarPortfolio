import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  tags,
  lastUpdated,
}) => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg m-4 bg-opacity-75 bg-gray-700">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-slate-50 text-xl mb-2">{title}</div>
        <p className="text-slate-50 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-slate-50 text-base">Last updated: {lastUpdated}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
