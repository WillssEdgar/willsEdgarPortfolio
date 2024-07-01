import "./Home.css";
import backgroundImage from "../../assets/hoomeImage.png"; // Import the image

function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md grid grid-rows-2 text-center bg-slate-300 p-3 rounded-lg bg-opacity-70">
        <div>
          <h1 className="text-5xl font-bold text-gray-800" id="home">
            WILLS EDGAR
          </h1>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-700">
            SOFTWARE ENGINEER & FULL STACK DEVELOPER
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
