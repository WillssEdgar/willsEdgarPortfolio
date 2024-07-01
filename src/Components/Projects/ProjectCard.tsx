import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  page: string;
  mobile: boolean;
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  page,
  mobile,
  imageSrc,
  title,
  description,
  tags,
  lastUpdated,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {!mobile ? (
        <>
          <div className="hidden md:flex md:w-7/12 ">
            <img
              className="w-full h-auto rounded-xl"
              src={imageSrc}
              alt={title}
            />
          </div>

          <div
            className="rounded-2xl m-4 bg-gray-100 w-10/12 shadow-lg hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => navigate(`/${page}`)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-2xl mt-4 mb-2">
                {title}
              </div>
              <p className="text-gray-700 text-lg mb-2">{description}</p>
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
              <p className="text-gray-600 text-sm">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" hidden md:w-2/12 md:flex md:justify-start items-center">
            <img
              className=" h-auto rounded-xl mb-2"
              src={imageSrc}
              alt={title}
            />
          </div>
          <div
            className="flex justify-center md:block rounded-2xl m-4 bg-gray-100 md:w-7/12 shadow-lg hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => navigate(`/${page}`)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-2xl mt-4 mb-2">
                {title}
              </div>
              <p className="text-gray-700 text-lg mb-2">{description}</p>
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
              <p className="text-gray-600 text-sm">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectCard;
