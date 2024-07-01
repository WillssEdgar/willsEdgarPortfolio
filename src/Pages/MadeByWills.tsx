import Preview from "../assets/MadeByWillsPreview.png";

function MadeByWills() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-20 mx-10 flex justify-start items-center">
        <h5 className="text-gray-700 underline text-5xl">Made By Wills</h5>
      </div>
      <div>
        <p className="text-gray-700 text-lg font-bold w-8/12 m-5">
          This is a website that I have created for my woodworking business. I
          created this project using React with TypeScript. To style this I used
          Tailwind CSS.
        </p>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <img
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          src={Preview}
          alt="Preview of the project"
        />
      </div>
    </div>
  );
}

export default MadeByWills;
