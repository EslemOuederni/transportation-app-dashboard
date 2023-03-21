import React from "react";

const ChartCard = ({ name, data, svg, bg, text }) => {
  return (
    <div
      className={`w-[170px] h-[120px] p-4 xl:w-1/4 ${bg} rounded-md mr-2 mb-2 cursor-pointer grow-0 basis-0 shrink-0`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between px-4 py-4">
          <div className="flex mr-4">
            <span className="items-center px-4 py-4 m-auto bg-white rounded-full hover:bg-green-300">
              {svg}
            </span>
          </div>
          <div className="flex-1 pl-1">
            <div className={`text-xl font-semibold ${text}`}>{data}</div>
            <div className={`text-sm font-semibold sm:text-base ${text}`}>
              {name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
