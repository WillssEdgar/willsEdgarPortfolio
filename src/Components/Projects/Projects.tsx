import React from "react";
import ProjectCard from "./ProjectCard";
import MadeByWills from "../../assets/MadeByWillsPreview.png";
import MockTrading from "../../assets/mockTradingHome.png";
import MoodWaves from "../../assets/MoodWaves.png";
import WseBanking from "../../assets/MockBanking.png";
import HawksEye from "../../assets/HawksEyeFeed.png";
const Projects: React.FC = () => {
  return (
    <>
      <div className="min-h-screen md:flex md:items-center md:justify-center">
        <div className="projects container " id="projects">
          <h5 className="mb-3 text-6xl  p-10 mt-12 text-start text-gray-700 font-bold">
            Web Applications
          </h5>
          <div className="flex justify-center md:flex md:justify-end items-center gap-4 my-20">
            <ProjectCard
              page="MockTrading"
              mobile={false}
              imageSrc={MockTrading}
              title="StockSim"
              description="A full stack stock trading application built with Go and React."
              tags={[
                "Go",
                "Gin",
                "GORM",
                "SupaBase",
                "PostgreSQL",
                "Tailwind CSS",
                "React",
                "TypeScript",
              ]}
              lastUpdated="May 2024 - Present"
            />
          </div>
          <div className="flex justify-center md:flex md:justify-end items-center gap-4 my-20">
            <ProjectCard
              page="WseBanking"
              mobile={false}
              imageSrc={WseBanking}
              title="WSE Banking"
              description="A full stack Banking Application built with Java."
              tags={[
                "Java",
                "Spring Boot",
                "SupaBase",
                "PostgreSQL",
                "Bootstrap",
                "React",
                "TypeScript",
              ]}
              lastUpdated="March 2024-May 2024"
            />
          </div>
          <div className="flex justify-center md:flex md:justify-end items-center gap-3 my-20">
            <ProjectCard
              page="MadeByWills"
              mobile={false}
              imageSrc={MadeByWills}
              title="Made By Wills"
              description="A React driven TypeScript web application for my woodworking company."
              tags={["React", "TypeScript", "CSS"]}
              lastUpdated="December 2023-January 2024"
            />
          </div>
          <h5 className="mb-3  text-6xl p-10 text-start text-gray-700 font-bold">
            Mobile Applications
          </h5>
          <div className="flex justify-end xs:justify-center items-center gap-28 my-20">
            <ProjectCard
              page="HawksEye"
              mobile={true}
              imageSrc={HawksEye}
              title="Hawks Eye"
              description="An android/ios app built with flutter that acts as a place to display and find UNCW sites."
              tags={["Flutter", "Dart", "Flutter Maps", "Firebase"]}
              lastUpdated="March 2024-May 2024"
            />
          </div>

          <div className="flex justify-end xs:justify-center items-center gap-28 my-20">
            <ProjectCard
              page="MoodWaves"
              mobile={true}
              imageSrc={MoodWaves}
              title="Mood Waves"
              description="Mood Waves is an android/ios app built with flutter that serves as a wellness app for UNCW students."
              tags={["Flutter", "Dart", "Firebase"]}
              lastUpdated="January 2024-May 2024"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
