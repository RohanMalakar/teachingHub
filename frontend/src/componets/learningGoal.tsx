import React from "react";
import developerActivity from "../assets/LearningGoal/developerActivity.gif";
import training from "../assets/LearningGoal/training.png";
import certificate from "../assets/LearningGoal/certificate.png";
import project from "../assets/LearningGoal/project.png";

const LearningGoals: React.FC = () => {
  return (
    <div className="flex flex-col md:pb-36 md:flex-row justify-between items-center p-6 md:p-8 w-[80%] mx-auto">
      <div className="md:w-1/3 w-full text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#0555C7] pb-2">Learning focused on your goals</h2>
        
        <div className="space-y-5">
          <div className="bg-white shadow-lg rounded-lg p-4 gap-5 flex flex-col md:flex-row items-center md:items-start">
            <div className="border-1 flex items-center justify-center  rounded-full  bg-[#C5DBFF] p-2 shadow-md">
              <img src={training} alt="Hand-On Training" className="max-w-12 max-h-12" />
            </div>
            <div>
              <h3 className="font-bold">Hand - On Training</h3>
              <p className="text-gray-600 text-sm">
                Enhance Your Skills Efficiently With AI-Driven Coding Exercises, Simulated Tests, Skills Evaluations, Practical Labs, And Immersive Workspaces.
              </p>
            </div>
          </div>

          <div className="bg-[#C5DBFF] shadow-lg gap-5  rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <div className="border-1 mr-3 rounded-full bg-white p-2 shadow-md">
              <img src={certificate} alt="Certification" className="max-w-12 max-h-12 " />
            </div>
            <div>
              <h3 className="font-bold">Certification</h3>
              <p className="text-gray-600 text-sm">
                Prepare For Industry-Certified Credentials By Tackling Authentic Industry Challenges And Earning Badges As You Progress.
              </p>
            </div>
          </div>

          <div className="bg-[#C5DBFF] gap-5 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <div className="border-1 mr-3 rounded-full bg-white p-2 shadow-md">
               <img src={project} alt="Major Projects" className="max-w-12 max-h-12" />
            </div>
            <div>
              <h3 className="font-bold">3 - 4 Major Projects</h3>
              <p className="text-gray-600 text-sm">
                "Demonstrate Proficiency By Actively Participating In 3-4 Major Projects, Showcasing Your Skills In Real-World Scenarios."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-full flex flex-col items-center justify-center mt-6 md:mt-0">
        <div className="md:w-[50%] w-full flex justify-center mt-6 md:mt-0">
          <img src={developerActivity} alt="Developer Illustration" className="w-full" />
        </div>
        <div className="md:w-[50%] w-full flex justify-center mt-6">
          <button className="bg-[#F58A3C] text-white px-6 py-2 w-full rounded-lg shadow-lg hover:bg-orange-600 transition">Enroll Fast</button>
        </div>
      </div>
    </div>
  );
};

export default LearningGoals;