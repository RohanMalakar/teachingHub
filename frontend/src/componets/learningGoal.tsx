import React from "react";

const LearningGoals: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 w-full">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">Learning focused on your goals</h2>
        
        <div className="space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <img src="/assets/training.png" alt="Hand-On Training" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
            <div>
              <h3 className="font-bold">Hand - On Training</h3>
              <p className="text-gray-600 text-sm">
                Enhance Your Skills Efficiently With AI-Driven Coding Exercises, Simulated Tests, Skills Evaluations, Practical Labs, And Immersive Workspaces.
              </p>
            </div>
          </div>

          <div className="bg-blue-200 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <img src="/assets/certification.png" alt="Certification" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
            <div>
              <h3 className="font-bold">Certification</h3>
              <p className="text-gray-600 text-sm">
                Prepare For Industry-Certified Credentials By Tackling Authentic Industry Challenges And Earning Badges As You Progress.
              </p>
            </div>
          </div>

          <div className="bg-blue-300 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <img src="/assets/projects.png" alt="Major Projects" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
            <div>
              <h3 className="font-bold">3 - 4 Major Projects</h3>
              <p className="text-gray-600 text-sm">
                "Demonstrate Proficiency By Actively Participating In 3-4 Major Projects, Showcasing Your Skills In Real-World Scenarios."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
        <img src="/assets/developer.png" alt="Developer Illustration" className="w-60 md:w-80" />
      </div>

      <div className="w-full flex justify-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition">Enroll Fast</button>
      </div>
    </div>
  );
};

export default LearningGoals;