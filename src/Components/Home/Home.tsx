import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="grid grid-rows-2 text-center container bg-slate-300 p-3 rounded-lg bg-opacity-70">
        <div>
          <h1 className="text-6xl font-bold text-gray-800" id="home">
            WILLS EDGAR
          </h1>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-700 ">
            SOFTWARE ENGINEER & FULL STACK DEVELOPER
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
