import CourseCard from "./courseCard";
import grapphic_Design from "../assets/courses/graphic_Design.png";
import uiUxDesign from "../assets/courses/ui_Design.png";
import webDevelopment from "../assets/courses/web_Dev.png";
import programmingLanguages from "../assets/courses/programming_Language.png";
import web_Design from "../assets/courses/web_Design.png";


interface CourseData {
  title: string;
  description: string;
  index: number;
  fees: number;
  image: string;
  color: string;
}

const coursesData: CourseData[] = [
  {
    title: "UI/UX Design",
    description:
      "At TeachingHub, we excel in data-driven design. Our UI/UX program prioritizes user needs for resonating interfaces. In motion graphics, creativity and tech merge for visual excellence. We identify your audience, optimizing for outstanding outcomes.",
    index: 1,
    fees: 7999,
    image: uiUxDesign,
    color: "bg-[#D0E5FF]", // Example Tailwind background color
  },
  {
    title: "Web Development",
    description:"TeachingHub offers comprehensive web development courses designed to equip you with the skills needed to build dynamic and responsive websites. Learn from industry experts through hands-on projects and interactive lessons,mastering both front-end and back-end development.",
    index: 2,
    fees: 7999,
    image: webDevelopment,
    color: "bg-[#CBFFE6]",
  },
  {
    title: "Web Designing ",
    description:
      "Enhance your skills with TeachingHub's comprehensive web design courses. Learn the latest techniques and tools from industry experts, tailored for both beginners and advanced learners. Build stunning, responsive websites and advance your career in web development with TeachingHub.",
    index: 3,
    fees: 4999,
    image: web_Design,
    color: "bg-[#EDDDF4]",
  },
  {
    title: "Graphic Designing ",
    description:
      "Unlock your creative potential with TeachingHub's comprehensive Graphic Design courses. Learn from industry experts, mastering the latest tools and techniques to create stunning visuals. Whether you're a beginner or looking to advance your skills, our courses provide the knowledge and experience to succeed in the dynamic field of graphic design.",
    index: 4,
    fees: 7999,
    image: grapphic_Design,
    color: "bg-[#FFDFCE]",
  },
  {
    title: "Programming Languages",
    description:
      "TeachingHub offers comprehensive courses in C, C++, Java, and Python, catering to both beginners and advanced learners. Enhance your programming skills with expert-led instruction and hands-on practice in these essential languages.",
    index: 5,
    fees: 4999,
    image: programmingLanguages,
    color: "bg-[#CBCBFF]",
  },
];


function CoursesList() {
  return (
    <div className="relative flex flex-col items-center justify-center m-auto bg-white gap-6 py-8 w-[90%] lg:w-[80%] lg:py-24">
      { coursesData.map((courseData)=><CourseCard key={courseData.index} {...courseData}/>)}
    </div>
  )
}

export default CoursesList;