import "./Expertise.css";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import database from "../../assets/database.png";
import mobile from "../../assets/flutter.png";
function Expertise() {
  return (
    <div>
      <div className="expertise" id="expertise">
        <h5 className="mb-3">My Expertise</h5>
        <div className="container con">
          <div className="row p-2 justify-content-evenly">
            <div
              className="col-sm-8 col-md-6 col-lg-4 shadow-lg p-3 m-4 bg-light-subtle rounded"
              style={{ width: "400px", height: "350px" }}
            >
              <h5>Backend</h5>
              <img className="img" src={backend} alt="Backend" />
              <ul className="list-unstyled left-list">
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div
              className="col-sm-8 col-md-6 col-lg-4 shadow-lg p-3 m-4 bg-light-subtle rounded"
              style={{ width: "400px", height: "350px" }}
            >
              <h5>Frontend</h5>
              <img className="img" src={frontend} alt="Frontend" />
              <ul className="list-unstyled left-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div
              className="col-sm-8 col-md-6 col-lg-4 shadow-lg p-3 m-4 bg-light-subtle rounded"
              style={{ width: "400px", height: "350px" }}
            >
              <img className="img" src={database} alt="Database" />
              <h5>Database</h5>

              <ul className="list-unstyled left-list">
                <li>Postgresql</li>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div
              className="col-sm-8 col-md-6 col-lg-4 shadow-lg p-3 m-4 bg-light-subtle rounded"
              style={{ width: "400px", height: "350px" }}
            >
              <img className="img" src={mobile} alt="Mobile" />
              <h5>Mobile</h5>
              <ul className="list-unstyled left-list">
                <li>Flutter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
