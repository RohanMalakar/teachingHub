import React from "react";

interface CourseCardProps {
  title: string;
  description: string;
  index: number;
  fees: number;
  image: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  index,
  fees,
  image,
  color
}) => {
  return (
    <div className={`${color} rounded-2xl lg:w-[80%]  shadow-lg p-6 flex flex-col md:flex-row items-center gap-6`}>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">0{index}</h2>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-3 md:line-clamp-none leading-relaxed">{description}</p>
        <p className="font-bold text-lg mt-4">Course Fee - {fees}/-</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Know More
        </button>
      </div>
      <div className="flex-1">
        <img src={image} alt={title} className="w-full max-w-md rounded-lg" />
      </div>
    </div>
  );
};

export default CourseCard;
