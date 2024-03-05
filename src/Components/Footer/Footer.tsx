import "./Footer.css";
import linkedInImage from "../../assets/iconmonstr-linkedin-3.svg";
import gitHubImage from "../../assets/github-mark-white.svg";
function Footer() {
  return (
    <div>
      <footer className="footer bg-dark">
        <div className="footer-content">
          <a href="https://www.linkedin.com/in/williamsedgar">
            <img className="linkedIn" src={linkedInImage} alt="LinkedIn" />
          </a>
          <a href="https://github.com/WillssEdgar">
            <img className="github" src={gitHubImage} alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
