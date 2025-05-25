import { Container, Stack } from '@mui/material';
import '../../css/home.css';

const Home = () => {
  return (
    <Stack pb={6}>
      <Container className="homeContainer" sx={{ mt: 6 }}>
        <section className="homeSection py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                Context-Aware CI/CD Optimizer
              </h2>
              <p className="text-lg text-sky-100">
                Revolutionize your software development workflow with AI-driven
                automation that understands your project's context and adapts to
                your team's needs.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="src/assets/devops-removebg.png"
                alt="devops"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <hr className="bg-sky-600 mt-3" />

          <div
            className="feature-section mt-10 p-6 rounded-lg "
            style={{ backgroundColor: '#726CFA' }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-100 mb-1">
              Services We Offer
            </h2>
            <p className="text-lg text-sky-100 mb-6">
              Powerful AI-driven tools and algorithms to streamline your
              development workflow and enhance code quality
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl felx flex-col items-center">
                <div className="flex items-center w-full">
                  <img
                    src="src\assets\conflict.png"
                    alt="Conflict"
                    className="w-16 h-16 mr-8"
                  ></img>
                  <h3 className="text-black font-bold text-lg">
                    Merge Conflict Resolution
                  </h3>
                </div>
                <div className="text-gray-800 mt-4 text-center">
                  <p>
                    Automatically resolve merge conflicts with intelligent
                    analysis. Reduce manual intervention and minimize bugs in
                    your codebase.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl felx flex-col items-center">
                <div className="flex items-center w-full">
                  <img
                    src="src\assets\rocket.png"
                    alt="Conflict"
                    className="w-16 h-16 mr-8"
                  ></img>
                  <h3 className="text-black font-bold text-lg">
                    CI/CD Pipeline Automation
                  </h3>
                </div>
                <div className="text-gray-800 mt-4 text-center">
                  <p>
                    Context-aware pipeline generation with automated PR reviewer
                    assignment. Perfect for teams new to DevOps practices.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl felx flex-col items-center">
                <div className="flex items-center w-full">
                  <img
                    src="src\assets\stop-watch.png"
                    alt="Conflict"
                    className="w-16 h-16 mr-8"
                  ></img>
                  <h3 className="text-black font-bold text-lg">
                    Smart Pipeline Triggers
                  </h3>
                </div>
                <div className="text-gray-800 mt-4 text-center">
                  <p>
                    Recommand intelligent deployment scheduling that balances
                    urgent fixes with thorough testing. Maintain stability while
                    meeting deadlines.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl felx flex-col items-center">
                <div className="flex items-center w-full">
                  <img
                    src="src\assets\web-coding.png"
                    alt="Conflict"
                    className="w-16 h-16 mr-8"
                  ></img>
                  <h3 className="text-black font-bold text-lg">
                    Semantic Conflict Detection
                  </h3>
                </div>
                <div className="text-gray-800 mt-4 text-center">
                  <p>
                    AI-powered detection of logical inconsistencies that
                    traditional tools miss. Prevent runtime issues before they
                    happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-sky-600 my-8" />

          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 rounded-xl flex flex-col items-center justify-center">
              <img
                src="src/assets/100.png"
                alt="Conflict"
                className="w-16 h-16"
              />
              <h3 className="text-red-400 font-bold text-md mt-2">
                GitHub Compatible
              </h3>
            </div>

            <div className="p-4 rounded-xl flex flex-col items-center justify-center">
              <img
                src="src/assets/0-percent.png"
                alt="Conflict"
                className="w-16 h-16"
              />
              <h3 className="text-sky-100 font-bold text-md mt-2">
                Learning Curve
              </h3>
            </div>
            <div className="p-4 rounded-xl flex flex-col items-center justify-center">
              <div className="flex items-end space-x-2">
                <div className="w-16 h-16 border-2 border-yellow-300 rounded-full flex items-center justify-center bg-orange-500 border-4">
                  <p className="text-yellow-300 font-bold text-2xl">2s</p>
                </div>
              </div>
              <h3 className="text-yellow-300 font-bold text-md mt-2">
                Response Time
              </h3>
            </div>

            <div className="p-4 rounded-xl flex flex-col items-center justify-center">
              <div className="flex items-end space-x-2">
                <div className="w-16 h-16 border-2 border-lime-400 rounded-full flex items-center justify-center bg-lime-400 border-4">
                  <p className="text-green-700 font-bold text-lg">99.9%</p>
                </div>
              </div>
              <h3 className="text-lime-400 font-bold text-md mt-2">
                System Uptime
              </h3>
            </div>
          </div>
        </section>
      </Container>
    </Stack>
  );
};

export default Home;
