import React from "react";

const ChartCard = ({ name, data, svg, bg }) => {
  return (
    <div
      className={`w-full p-4 xl:w-1/4 sm:w-1/2 ${bg} rounded-md mr-2 mb-2 cursor-pointer`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between px-4 py-4">
          <div className="flex mr-4">
            <span className="items-center px-4 py-4 m-auto bg-white rounded-full hover:bg-green-300">
              {svg}
            </span>
          </div>
          <div className="flex-1 pl-1">
            <div className="text-xl font-medium text-gray-600">{data}</div>
            <div className="text-sm text-gray-900 sm:text-base">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
