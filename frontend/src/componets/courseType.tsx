import React from 'react';
import graphicDesign from '../assets/graphicDesigning.svg';
import webDevelopment from '../assets/webDevelopment.svg';
import uiUxDesign from '../assets/uiDesign.svg';
import programmingLanguages from '../assets/programmingLanguage.svg';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  color:string
}

const courses: Course[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "At TeachingHub, we excel in data driven design. Our UI/UX program prioritizes user needs for resonating interfaces. In Motion Graphics, creativity and tech merge for visual excellence. We identify your audience, optimizing for outstanding outcomes.",
    image: uiUxDesign,
    color:"bg-[#FFF0E2]"
  },
  {
    id: 2,
    title: "Web Development",
    description: "At TeachingHub, we excel in data-driven design. Our UI/UX program prioritizes user needs for resonating interfaces. In Motion Graphics, creativity and tech merge for visual excellence. We identify your audience, optimizing for outstanding outcomes.",
    image: webDevelopment,
    color:"bg-[#E5E5E5]"
  },
  {
    id: 3,
    title: "Graphic Designing",
    description: "Discover your creative edge with TeachingHub’s Graphic Design courses. Gain expertise from industry leaders, mastering cutting-edge tools for impactful visual storytelling.",
    image: graphicDesign,
    color:"bg-[#E5E5E5]"
  },
  {
    id: 4,
    title: "Programming Languages",
    description: "At TeachingHub, we empower through programming. DSA sharpens problem-solving skills. Python, Java open diverse coding avenues. Explore logic and creativity, master languages, and conquer complex challenges with us.",
    image: programmingLanguages,
    color:"bg-[#AFEEE2]"
  },
];

const Courses: React.FC = () => {
  return (
    <div className="relative bg-white py-8 -z-40 lg:py-12">
      <div className='absolute -left-[20%]  bg-gradient-to-t from-[#79A2E5] to-[#B1CCF8] top-0  w-[300px] lg:w-[581px] h-[300px] lg:h-[581px] rounded-full -z-10 right-0'> 
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='z-2'>
          <p className="text-sm lg:text-base text-blue-600 font-bold">Courses</p>
          <h2 className="text-2xl lg:text-3xl  font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">OUR POPULAR COURSES</h2>
        </div>
        <div className="grid grid-cols-1 z-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {courses.map((course) => (
            <div className={`flex  items-center lg:relative top-${(course.id)%2==0?0:16} flex-col gap-4 lg:gap-6`}>
              <div key={course.id} className="relative min-h-[370px] z-0 overflow-hidden bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 lg:p-6 border border-gray-200">
                <div className={`absolute -top-1 lg:top-0 -left-3 ${course.color} text-blue-600 rounded-full w-10 lg:w-10 h-10 lg:h-10 flex items-center justify-center font-bold`}>
                  {course.id}
                </div>
                <div className="flex relative  justify-center py-10">
                  <div className={`absolute top-[50%] z-3 left-[50%] translate-x-[-50%] translate-y-[-50%] ${course.color} text-blue-600 rounded-full w-20 lg:w-20 h-20 lg:h-20 flex items-center justify-center font-bold`}>
                  </div>
                  <img className='z-10 relative top-5 right-5' src={course.image} alt={course.title} />
                </div>
                <h3 className="text-lg lg:text-xl  font-semibold text-gray-900 mb-1 lg:mb-2">{course.title}</h3>
                <p className="text-gray-600 text-xs pt-2 lg:text-sm mb-2 lg:mb-4">{course.description}</p>
              </div>
              <button className="bg-[#0555C7] hover:bg-[#32A6FB] cursor-pointer rounded-3xl px-5 py-2 text-white ">
                <FaArrowRightLong className="-rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 text-blue-200 text-4xl sm:text-5xl lg:text-6xl opacity-20 pointer-events-none">
        TEACHINGHUB
      </div>
    </div>
  );
};

export default Courses;