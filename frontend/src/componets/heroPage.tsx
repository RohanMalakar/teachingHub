import hero from '../assets/hero.png';

export default function HeroPage() {
  return (
    <div className='flex flex-col px-3 max-w-[100vw] overflow-hidden lg:flex-row items-center justify-around lg:px-20'>
      <div className='p-10'>
        <img width={"505px"} src={hero} alt="hero" />
      </div>
      <div className='text-center flex flex-col items-center gap-5'>
        <p className='px-5 text-center rounded-3xl py-2 bg-[#C4DBFF]'>
           Amazing  
           <span className='text-[#F16425]'>
            {" "} Starts {" "}
           </span> 
           Here
        </p>
        <p className='lg:text-[45px] text-3xl text-center font-700'>
          Learning {" "}
          <span className='text-[#D13C84]'>
            TODAY {" "}
          </span>, <br /> 
          Leading {" "}
          <span className='text-[#D13C84]'>
            Tomorrow 
          </span>
         </p>
        <p className=' border-b-2 inline text-sm lg:text-2xl '>
          Global learning spot
        </p>
        <button className='bg-[#0555C7] text-[13px] border-2 border-transparent rounded-2xl py-4 px-8 text-white' type="button">
          Get started
        </button>
      </div>
      <div className='absolute lg:-left-[86px] -left-[50px]  bg-gradient-to-t from-[#6198f1] via-[#B1CCF8] to-[#B1CCF8] lg:-top-[255px] -top-[100px] w-[300px] lg:w-[581px] h-[300px] lg:h-[581px] rounded-full bg-[#A8C4F1] -z-2 right-0'> 
        <p className="absolute text-[#FFFFFF21] bottom-20 lg:bottom-30 right-10 lg:right-40  z-2 2xl lg:text-4xl text-2xl font-inika font-extrabold ">
          TEACHING
          <span className="text-[10px] lg:text-xl">HUB</span>
        </p>
      </div>
      <div className='absolute lg:-left-[267px] -left-24 lg:-top-[239px] -top-[100px] w-[400px] h-[400px] lg:w-[868px] lg:h-[868px] rounded-full bg-[#A8C4F1] -z-10 right-0'>  
      </div>
    </div>
  )
}

