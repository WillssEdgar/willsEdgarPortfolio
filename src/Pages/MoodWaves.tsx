import Preview from "../assets/MoodWaves.png";

function MoodWaves() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="mt-20 pt-10 px-10 flex justify-start items-center">
        <h5 className="text-gray-700 text-5xl font-semibold">Mood Waves</h5>
      </div>
      <div className="px-10 flex justify-start items-center">
        <a
          href="https://github.com/WillssEdgar/MoodWaves"
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
              <li>Cross-platform mobile application built with Flutter.</li>
              <li>Leverages the power of Firebase and Firestore.</li>
              <li>Provides a seamless and secure user experience.</li>
              <li>
                Designed specifically for students at the University of North
                Carolina Wilmington.
              </li>
              <li>
                Offers a unique space for students to:
                <ul className="list-disc pl-6">
                  <li>Express their feelings.</li>
                  <li>Track their moods.</li>
                  <li>Obtain mental health resources.</li>
                  <li>Stay connected with campus events.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 flex justify-center  mb-10 lg:mb-0">
          <img
            className="w-4/12 flex justify-center items-center"
            src={Preview}
            alt="Preview of the project"
          />
        </div>
      </main>
    </div>
  );
}

export default MoodWaves;
