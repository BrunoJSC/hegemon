import React from "react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 p-6 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
        {description}
      </p>

      {/* Learn More Button */}
      <div className="mt-auto">
        <button className="inline-flex items-center px-4 py-2 bg-[#A76B3F] text-white text-sm font-medium rounded-full hover:bg-[#8B5A33] transition-colors duration-200">
          {t("services.learnMore")}
        </button>
      </div>
    </div>
  );
};
