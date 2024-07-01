
import ExpertiseCard from "./ExpertiseCard";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import database from "../../assets/database.png";
import mobile from "../../assets/flutter.png";

function Expertise() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4 py-8 container" id="expertise">
        <h5 className="text-6xl text-gray-700 text-center font-bold mb-10">
          Expertise
        </h5>

        <div className="flex flex-wrap justify-center gap-8">
          <ExpertiseCard
            imageSrc={backend}
            title="Backend"
            technologies={["Java", "Python", "TypeScript", "JavaScript"]}
          />

          <ExpertiseCard
            imageSrc={frontend}
            title="Frontend"
            technologies={["React", "TypeScript", "Bootstrap", "Tailwind"]}
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

