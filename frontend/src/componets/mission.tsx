import React from 'react';
import missionIMG from "../assets/mission.png";
import vision from "../assets/vision.png";
import overview from "../assets/overview.png";

const MissionVisionOverview: React.FC = () => {
   interface mission {
    title: string;
    description: string;
    image: string;
  }

  const mission: mission[] = [
    {
      title: 'OVERVIEW',
      description: 'Empowering students with affordable, in-demand IT and technology solutions, fostering a creative community, and driving sustainable education while addressing environmental challenges in a growing ecosystem. We Offering Short-term Training Sessions for Students to Explore In-Demand Topics, Promoting Diversity and Career Readiness.',
      image: missionIMG,
    },
    {
      title: 'MISSION',
      description: 'Our goal is to instill a sense of purpose and passion in our learners, equipping them with the skills, knowledge, and mindset necessary for personal and professional success. We encourage critical thinking, creativity, and innovation, enabling individuals to make meaningful contributions to humanity.',
      image: vision,
    },
    {
      title: 'VISION',
      description: 'our vision is to educate and empower individuals within our community, fostering personal and economic growth. We believe that education is a transformative force that can unlock opportunities and create a pathway towards a brighter future.',
      image: overview,
    },
  ]
    
  return (
    <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mission.map((mission) => (
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center justify-center gap-2 p-3 bg-white">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                <img src={mission.image} alt={mission.title} />
              </div>
              <h2 className="text-xl font-bold uppercase">{mission.title}</h2>
            </div>
            <div className="p-6 bg-blue-200 h-80">
              <p className="text-gray-800">
                {mission.description}
              </p>
            </div>
          </div>
      ))}
     </div>
    </div>
  );
};

export default MissionVisionOverview;