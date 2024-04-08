import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import database from "../../assets/database.png";
import mobile from "../../assets/flutter.png";
import ExpertiseCard from "./ExpertiseCard";
// import "./Expertise.css";

function Expertise() {
  return (
    <div className="px-4 py-8  " id="expertise">
      <h5 className="text-6xl text-gray-700 text-center font-bold mb-10">
        Expertise
      </h5>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 flex-none justify-items-center gap-4">
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
  );
}

export default Expertise;
