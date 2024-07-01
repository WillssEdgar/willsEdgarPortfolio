import ExpertiseCard from "./ExpertiseCard";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import database from "../../assets/database.png";
import mobile from "../../assets/flutter.png";

import backgroundImage from "../../assets/greenBackground.png";
function Expertise() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 py-8 container" id="expertise">
        <h5 className="text-6xl text-gray-700 text-center font-bold mb-10">
          Expertise
        </h5>

        <div className="flex flex-wrap justify-center gap-8">
          <ExpertiseCard
            imageSrc={backend}
            title="Backend"
            technologies={["Java", "C/C++", "Go", "Python", "TypeScript"]}
          />

          <ExpertiseCard
            imageSrc={frontend}
            title="Frontend"
            technologies={["React", "TypeScript", "Bootstrap", "Tailwind CSS"]}
          />

          <ExpertiseCard
            imageSrc={database}
            title="Database"
            technologies={["PostgreSQL", "MongoDB", "Firebase", "MySQL"]}
          />

          <ExpertiseCard
            imageSrc={mobile}
            title="Mobile"
            technologies={["Flutter", "IOS", "Android"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
