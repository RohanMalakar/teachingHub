import { FaArrowRightLong } from 'react-icons/fa6';
import why from '../assets/why.png';
import MissionVisionOverview from './mission.tsx';


function WhyUs() {
  return (
    <div>
       <div className='flex lg:h-96 flex-col items-center px-5 justify-center lg:justify-items-start lg:flex-row bg-gradient-to-t from-[#B1CCF8]  to-[#79A2E5]  gap-5 py-5 lg:py-6'>
           <div className='h-full flex justify-center w-full lg:w-1/3'>
             <img className='h-full w-full' src={why} alt="whyImage" />
           </div>
           <div className='lg:max-w-96 w-full flex flex-col items-start gap-5'>
              <p className='text-[#0555C7] inline-block border-b-2 text-sm lg:text-xl'>WHY US</p>
              <span className='font-bold text-sm lg:text-2xl block'>Why Choose us</span>
              <p className='text-xm lg:text-sm'>
                We are specialized in building unique digital experiences for our clients - from websites to special purpose applications. We also help businesses & Students to reach wider audiences & career .It's better to see something once than to hear about it a thousand times.
              </p>
              <button className="bg-[#0555C7] hover:bg-[#B1CCF8] cursor-pointer rounded-3xl px-5 py-2 text-white ">
                  <FaArrowRightLong className="-rotate-45" />
              </button>
           </div>
           <div className='w-full flex items-center justify-center'>
               <div className='text-4xl lg:text-[#A8C4F1BF] text-[#74a4f3bf] font-[900]'>TEACHING<span className='text-2xl'>HUB</span>  </div>
           </div>
       </div>
       <div>
          <MissionVisionOverview/>
       </div>
    </div>
  )
}

export default WhyUs;