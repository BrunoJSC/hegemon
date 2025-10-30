import React from "react";

interface CardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col min-h-[320px]">
      {/* Icon */}
      <div className="mb-4 shrink-0">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight min-h-[56px] flex items-start">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed grow line-clamp-3">
        {description}
      </p>

      {/* Learn More Link */}
      <div className="mt-4 pt-4 shrink-0">
        <button className="px-4 py-2 bg-[#A76B3F] text-white text-sm font-medium rounded-full hover:bg-[#8B5A33] transition-colors duration-200">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};
