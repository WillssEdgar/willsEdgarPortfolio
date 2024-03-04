import "./Projects.css";
import madeByWillsPreview from "../../assets/MadeByWillsPreview.png";

const Projects = () => {
  return (
    <div>
      <div className="projects" id="projects">
        <h5 className="mb-3">Projects</h5>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card h-100 bg-light-subtle">
              <img
                src={madeByWillsPreview}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Made By Wills</h5>
                <p className="card-text">
                  A React driven TypeScript web application for my woodworking
                  company.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3/3/2024
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card h-100 bg-light-subtle">
              <img
                src={madeByWillsPreview}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mood Waves</h5>
                <p className="card-text">
                  A wellness app built with dart and the Flutter framework.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Under Construction
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="card h-100 bg-light-subtle">
              <img
                src={madeByWillsPreview}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">WSE Banking</h5>
                <p className="card-text">
                  A full stack Banking Application built with Java.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Under Construction
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
