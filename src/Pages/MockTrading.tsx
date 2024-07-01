import Preview from "../assets/mockTradingHome.png";
import PreviewSignUp from "../assets/MockTradingSignUp.png";
import PreviewSignIn from "../assets/MockTradingSignIn.png";
import PreviewDashboard from "../assets/mockTradingDashboard.png";
import Carousel from "../Components/Carousel/Carousel";
function MockTrading() {
  const images = [Preview, PreviewSignUp, PreviewSignIn, PreviewDashboard];
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-32">
      <div className=" mt-20 pt-10 px-10 flex justify-start items-center">
        <h5 className="text-gray-700 text-5xl font-semibold">
          Full-Stack Mock Trading Application
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
        <div className="order-1 sm:order-2 w-full lg:w-1/2 lg:pl-10">
          <div>
            <div>
              <h6 className="text-gray-700 text-2xl font-semibold mb-4">
                Features:
              </h6>
              <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
                <li>
                  Simulate real stock market conditions with virtual currency.
                </li>
                <li>Access real-time stock prices and market data.</li>
                <li>Secure user authentication powered by Supabase.</li>
                <li>
                  Manage and track virtual investments with detailed analytics.
                </li>
                <li>
                  Learn with tutorials, webinars, and interactive modules.
                </li>
                <li>Monitor performance with comprehensive analytics.</li>
                <li>
                  Join a community of aspiring traders for insights and support.
                </li>
              </ul>
              <h3 className="text-gray-700 text-2xl font-semibold mt-8 mb-4">
                Benefits:
              </h3>
              <ul className="list-disc text-gray-700 text-lg space-y-4 pl-6">
                <li>Practice trading without the risk of losing real money.</li>
                <li>
                  Learn about trading in a structured, supportive environment.
                </li>
                <li>Engage with live market data and scenarios.</li>
                <li>Utilize advanced tools to improve trading strategies.</li>
                <li>
                  Connect with a network of fellow traders for collaboration.
                </li>
                <li>Experience a reliable and enriching trading simulation.</li>
              </ul>
            </div>
          </div>
        </div>

        <Carousel images={images} />
      </main>
    </div>
  );
}

export default MockTrading;
