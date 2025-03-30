import google from "../assets/ourActivity/google.png";
import slack from "../assets/ourActivity/slack.png";
import flipkart from "../assets/ourActivity/flipkart.png";
import paypal from "../assets/ourActivity/paypal.png";
import airbnb from "../assets/ourActivity/airbnb.png";
import { useEffect, useRef} from "react";

const images = [
  google,
  paypal,
  airbnb,
  slack,
  flipkart
];

const InfiniteSlider = () => {
  // Define the ref type as HTMLDivElement
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame: number;
    let speed: number = 2; // Adjust speed as needed

    const moveSlider = () => {
      if (slider) {
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveSlider);
    };

    animationFrame = requestAnimationFrame(moveSlider);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex justify-center pt-10 flex-col items-center  lg:py-20">
      <div>
        <p className="lg:text-3xl text-xl border-b-2">Our Activites conduct with</p>
      </div>
      <div className="overflow-hidden lg:w-1/2 w-2/3 bg-transparent py-5 lg:py-10 flex justify-center relative">
        <div ref={sliderRef} className="flex w-max gap-8 overflow-hidden whitespace-nowrap">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="lg:h-10 h-6 rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
