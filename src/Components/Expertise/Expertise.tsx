import Card from "./Card";
import "./Expertise.css";
function Expertise() {
  return (
    <div>
      <div className="expertise" id="expertise">
        <table className="expertiseTable">
          <tbody>
            <tr>
              <th colSpan={2} className="heading">
                Expertise
              </th>
            </tr>

            <tr>
              <td className="backendInfo">
                <Card
                  title="Backend Development"
                  info="Functional and Object Oriented Programming: Python, Java, JavaScript, TypeScript"
                  className="backendCard"
                />
              </td>

              <td className="frontendInfo">
                <Card
                  title="Frontend Development"
                  info="UI and UX: Javascript(React), HTML, CSS"
                  className="frontendCard"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expertise;
