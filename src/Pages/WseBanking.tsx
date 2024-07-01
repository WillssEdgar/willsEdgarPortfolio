import Preview from "../assets/MockBanking.png";
function WseBanking() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="mt-20 pt-10 px-10 flex justify-start items-center">
        <h5 className="text-gray-700 text-5xl font-semibold">
          Full-stack Banking Application
        </h5>
      </div>
      <div className="px-10 flex justify-start items-center">
        <a
          href="https://github.com/WillssEdgar/JavaFullStackBankingApp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          GitHub Link
        </a>
      </div>
      <main className="flex flex-col gap-4 lg:flex-row items-center lg:items-start mt-20 mx-10">
        <div className="w-3/4 lg:w-1/2 lg:pl-10">
          <div>
            <h6 className="text-gray-700 text-2xl font-semibold mb-4">
              Features:
            </h6>
            <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
              <li>Robust backend developed with Spring Boot.</li>
              <li>Reliable PostgreSQL database powered by Supabase.</li>
              <li>Dynamic frontend built with React and TypeScript.</li>
            </ul>
            <h6 className="text-gray-700 text-2xl font-semibold mt-8 mb-4">
              Benefits:
            </h6>
            <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
              <li>Delivers a seamless and secure banking experience.</li>
              <li>
                Integrates cutting-edge technologies for efficient performance.
              </li>
              <li>Provides scalability and a user-friendly interface.</li>
            </ul>
            <p className="text-gray-700 text-lg mt-8">
              Dive in to see how innovative development practices come together
              to create a sophisticated and fully-functional banking solution.
            </p>
          </div>
        </div>
        <div className="xs:w-full xs:mt-8 w-3/4 flex justify-center items-center mb-10 lg:mb-0">
          <img
            className="w-full  rounded-lg shadow-lg"
            src={Preview}
            alt="Preview of the project"
          />
        </div>
      </main>
    </div>
  );
}

export default WseBanking;
