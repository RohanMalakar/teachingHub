import CoursesList from "../componets/courseslist";
import LearningGoals from "../componets/learningGoal";
import NavBar from "../componets/navBar";

function CoursePage() {
  return (
    <div>
       <NavBar/> 
       <div className="flex justify-center py-10">
          <h2 className="px-3 py-2 rounded-3xl border-transparent  bg-[#F1EDED]"><span className="text-[#A1A0A0]"> Home</span> / Courses</h2>
       </div> 
       <div className="flex flex-col items-start gap-2 lg:px-48 px-12 py-12">
          <h1 className="text-[#0555C7] lg:text-3xl text-xl font-bold border-b-2">COURCES</h1>
          <p className="border-[#0555C7] lg:text-2xl text-lg border-b-2">OUR POPULAR COURSES</p>
       </div>
       <CoursesList/>
       <LearningGoals/>
    </div>
  )
}

export default CoursePage;