import logo from "../assets/logo.svg"

function OfferCourses() {
  return (
    <div className="flex bg-[#D7E6FF]  lg:py-20 py-10 lg:px-16 px-2 flex-col lg:flex-row gap-5">
        <div className="lg:max-w-[50%] lg:px-10 px-3">
           <p>
           TeachingHub is a pioneering force in tech education. Our mission is to empower global learners through cutting-edge programs in 
           <span className="text-black font-bold"> web technologies, coding (C, C++, Python, Java), UI/UX design, and motion graphics.</span> We offer practical, industry-relevant skills. Our accomplished mentors inspire and guide learners to success. TeachingHub is a vibrant community where creativity thrives at the intersection of technology. Join us for boundless opportunities in the ever-evolving tech world. Choose TeachingHub for a future driven by knowledge and innovation.
           </p>
        </div>
        <div className="flex items-center py-10 lg:py-0 flex-col gap-5 w-full justify-center">
            <div>
               <span className="text-white bg-[#0555C7] text-[10px] lg:text-[16px] px-4 py-2 rounded-full">MOTION GRAPHICS</span>
            </div>
            <div className="flex items-center  justify-center gap-3">
               <span 
                className="text-white bg-[#0555C7] px-4 py-2 text-[10px] lg:text-[16px] rounded-full">
                  WEB DESIGN
               </span>
               <div className="flex items-center">
                  <div>
                    <img className="h-[30px] lg:h-[50px]" src={logo} alt="logo" />
                  </div>
                  <div>
                    <div className="inline">
                      <p className="inline 2xl lg:text-3xl font-inika font-bold bg-gradient-to-r from-[#60DDC5] to-[#0366f2] text-transparent bg-clip-text">
                        TEACHING
                        <span className="relative after:content-[''] after:absolute after:-left-20 lg:after:-left-38 after:bottom-0 after:w-[80px] lg:after:w-[152px] lg:after:h-[4px] after:h-[2px]   after:rounded after:bg-gradient-to-r after:from-[#FE611D] after:to-[#870A4A]">
                        </span>
                        <span className="text-[10px] lg:text-2xl">HUB</span>
                      </p>
                      <p className="lg:text-[17px] text-[9px]">Global learning spot</p>
                    </div>
                  </div>
               </div>
               <span 
                  className="text-white text-[10px] lg:text-[16px] bg-[#0555C7] px-4 py-2 rounded-full">
                    UI/UX DESIGN
                </span>
            </div>
            <div>
               <span className="text-white text-[10px] lg:text-[16px] bg-[#0555C7] px-4 py-2 rounded-full">COADING</span>
            </div>
        </div>
    </div>
  )
}

export default OfferCourses;