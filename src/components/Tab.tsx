import React from "react";

interface IProps {
  label?: string;
  onClick?: any;
  isSelected?: boolean;
}
const Tab: React.FC<IProps> = ({ label, onClick, isSelected = false }) => {
  return (
    <div
      onClick={onClick}
      className={` hover:bg-gray-300 cursor-pointer ${
        isSelected ? " bg-blue-400" : "bg-gray-100"
      } px-3 py-1 first:rounded-tl-lg last:rounded-tr-lg`}
    >
      <p className={` ${isSelected ? "text-white" : "text-gray-700"}`}>
        {label}
      </p>
    </div>
  );
};

export default Tab;
