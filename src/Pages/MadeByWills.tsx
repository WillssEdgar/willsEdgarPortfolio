import Preview from "../assets/MadeByWillsPreview.png";

function MadeByWills() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="mt-20 pt-10 px-10 flex justify-start items-center">
        <h5 className="text-gray-700  text-5xl font-semibold">Made By Wills</h5>
      </div>
      <div className="px-10 flex justify-start items-center">
        <a
          href="https://github.com/WillssEdgar/MadeByWills"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          GitHub Link
        </a>
      </div>

      <main className="flex flex-col lg:flex-row items-center lg:items-start mt-20 mx-10 ">
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div>
            <h6 className="text-gray-700 text-2xl font-semibold mb-4">
              Key Features:
            </h6>
            <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
              <li>Crafted using React with TypeScript.</li>
              <li>Styled with Tailwind CSS for modern design.</li>
              <li>Showcases skills in modern web development.</li>
              <li>Combines powerful JavaScript frameworks.</li>
              <li>Utilizes responsive, utility-first CSS.</li>
              <li>Creates a seamless user experience.</li>
            </ul>
            <p className="text-gray-700 text-lg mt-8">
              Explore my work, learn about my craftsmanship, and see how I bring
              beautiful woodworking creations to life through a polished and
              engaging online presence.
            </p>
          </div>
        </div>
        <div className="xs:w-full xs:mt-8 w-3/4 flex justify-center items-center mb-10 lg:mb-0">
          <img
            className="sm:w-max w-full  rounded-lg shadow-lg"
            src={Preview}
            alt="Preview of the project"
          />
        </div>
      </main>
    </div>
  );
}

export default MadeByWills;
