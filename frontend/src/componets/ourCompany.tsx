import { FaArrowRightLong } from "react-icons/fa6";
import students from "../assets/students.png";

function OurCompany() {
  return (
    <div className="flex flex-col lg:flex-row  py-10 lg:py-6 gap-5">
        <div className="lg:px-16 px-8 flex flex-col items-start w-full lg:w-[50%] gap-5">
            <span className="border-b-2 text-[#0555C7] font-bold">COMPANY OVERVIEW</span>
            <p className="text-3xl font-bold">Unlock your potential: Today's knowledge, tomorrow's leadership.</p>
            <p>Empowering Empowering students with affordable, in-demand IT and technology solutions, fostering a creative community, and driving sustainable education while addressing environmental challenges in a growing ecosystem. We Offering Short-term Training Sessions for Students to Explore In-Demand Topics, Promoting Diversity and Career Readiness <br /> <br />.Our mission is to provide accessible and inclusive learning resources to every student, house-made woman, and unemployed individual, regardless of their background or circumstances. We strive to bridge the gap between education and employment by equipping our learners with the skills and knowledge needed to excel in today's competitive job market <br /> <br />.Through our comprehensive curriculum and innovative teaching methodologies, we aim to create a universal platform that empowers learners to pursue their passions, build successful careers, and contribute to the overall development of our economy.</p>
            <button className="bg-[#0555C7] hover:bg-[#32A6FB] cursor-pointer rounded-3xl px-5 py-2 text-white ">
              <FaArrowRightLong className="-rotate-45" />
            </button>
        </div>
        <div className="flex pt-5 w-full lg:w-[50%] flex-col items-center gap-5">
          <div className="relative ">
              <div className="lg:w-[606px] w-[100vw]  lg:-left-2 absolute -z-10 bottom-5 h-[100vw] lg:h-[606px] bg-gradient-to-r from-[#B1CCF8] to-[#739EE3] rounded-full">
              </div>
              <div className="w-full px-5 ">
                <img className="lg:h-[551px]  " src={students} alt="students" />
              </div>
          </div>
          <div className="flex flex-wrap px-2 justify-center gap-5 items-center">
             <div className="border-2 border-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] flex items-center justify-center flex-col rounded w-[144px] h-[144px] text-center">
                 <span className="font-[800] text-[#0040B4] text-2xl">512</span>
                 <p className="block">Students</p>
             </div>
             <div className="border border-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] flex items-center justify-center flex-col rounded w-[144px] h-[144px] text-center">
                 <span className="font-[800] text-[#EA4335] text-2xl">10</span>
                 <p className="block">Courses</p>
             </div>
             <div className="border border-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] flex items-center justify-center flex-col rounded w-[144px] h-[144px] text-center">
                 <span className="font-[800] text-[#0CB870] text-2xl">40</span>
                 <p className="block">Events</p>
             </div>
             <div className="border border-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] flex items-center justify-center flex-col rounded w-[144px] h-[144px] text-center">
                 <span className="font-[800] text-[#0040B4] text-2xl">17+</span>
                 <p className="block">Awards Program</p>
             </div>
          </div>
        </div>
    </div>
  )
}

export default OurCompany;