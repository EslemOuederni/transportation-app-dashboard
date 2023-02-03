import React from "react";

const HomePage = () => {
  return (
    <div className=" ml-[300px]">
      <div className="container items-center px-4 py-8 m-auto mt-5 sm:mt-10 md:mt-20">
        <div className="flex flex-wrap pb-3 bg-white  rounded-sm shadow-lg xl:divide-x xl:divide-y-0">
          <div className="w-full p-2 xl:w-1/4 sm:w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between px-4 py-4">
                <div className="flex mr-4">
                  <span className="items-center px-4 py-4 m-auto bg-blue-200 rounded-full hover:bg-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="items-center w-8 h-8 m-auto text-blue-500 hover:text-blue-600"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                </div>
                <div className="flex-1 pl-1">
                  <div className="text-xl font-medium text-gray-600">6,427</div>
                  <div className="text-sm text-gray-400 sm:text-base">User</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 xl:w-1/4 sm:w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between px-4 py-4">
                <div className="flex mr-4">
                  <span className="items-center px-4 py-4 m-auto bg-yellow-200 rounded-full hover:bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="items-center w-8 h-8 m-auto text-yellow-500 hover:text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 pl-1">
                  <div className="text-xl font-medium text-gray-600">563</div>
                  <div className="text-sm text-gray-400 sm:text-base">
                    Newsletter Sign Ups
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 xl:w-1/4 sm:w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between px-4 py-4">
                <div className="flex mr-4">
                  <span className="items-center px-4 py-4 m-auto bg-green-200 rounded-full hover:bg-green-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="items-center w-8 h-8 m-auto text-green-500 hover:text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 pl-1">
                  <div className="text-xl font-medium text-gray-600">
                    &#36;56,474
                  </div>
                  <div className="text-sm text-gray-400 sm:text-base">
                    Active Sessions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
