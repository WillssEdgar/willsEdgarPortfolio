import Preview from "../assets/HawksEyeProfile.png";
import Preview2 from "../assets/HawksEyeFeed.png";

function HawksEye() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="mt-20 pt-10 px-10 flex justify-start items-center">
        <h5 className="text-gray-700 text-5xl font-semibold">Hawks Eye</h5>
      </div>
      <div className="px-10 flex justify-start items-center">
        <a
          href="https://github.com/WillssEdgar/UNCW_Sites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          GitHub Link
        </a>
      </div>
      <main className="flex flex-col lg:flex-row items-center lg:items-start mt-20 mx-10">
        <div className="w-1/2 lg:pl-10">
          <div>
            <h6 className="text-gray-700 text-2xl font-semibold mb-4">
              Description:
            </h6>
            <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
              <li>
                Mobile app that provides a platform to add and view various
                sites on the University of North Carolina Campus.
              </li>
              <li>
                Developed using Flutter and Dart for cross-platform use
                (iOS/Android).
              </li>
              <li>Firebase is used for authentication and data storage.</li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 flex justify-center items-start lg:justify-center space-x-4">
          <img
            className="w-4/12 flex justify-center items-center"
            src={Preview}
            alt="Preview of the project"
          />
          <img
            className="w-4/12  flex justify-center items-center"
            src={Preview2}
            alt="Preview of the project"
          />
        </div>
      </main>
    </div>
  );
}

export default HawksEye;
