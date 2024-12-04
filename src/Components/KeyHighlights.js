import React from "react";

const KeyHighlights = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Key Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div
              className="group relative bg-white p-8 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-xl"></div>
              
              <div className="mb-6">
                <img
                  src="/image/prime-location.jpeg"
                  alt="Prime Location"
                  className="w-full h-48 object-cover rounded-md shadow-lg"
                />
              </div>

              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-green-500 group-hover:animate-pulse transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 9a3 3 0 106 0 3 3 0 00-6 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">Prime Location</h3>
              </div>
              <p className="text-gray-600 text-lg">
                250 sq. mt. plots (or 1.25 Nalk plots) in Mukteshwar, close to Nainital, Bhimtal, and other tourist spots.
              </p>
            </div>

            <div
              className="group relative bg-white p-8 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-xl"></div>
              
              <div className="mb-6">
                <img
                  src="/image/essential-infrastructure.jpeg"
                  alt="Infrastructure"
                  className="w-full h-48 object-cover rounded-md shadow-lg"
                />
              </div>

              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-500 group-hover:animate-pulse transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h1zm10 0a1 1 0 011 1v12a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">Essential Infrastructure</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Complete electrical and water connections in place.
              </p>
            </div>

            <div
              className="group relative bg-white p-8 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-t-xl"></div>
              
              <div className="mb-6">
                <img
                  src="/image/north-facing-view.jpeg"
                  alt="North Facing"
                  className="w-full h-48 object-cover rounded-md shadow-lg"
                />
              </div>

              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-500 group-hover:animate-pulse transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 10-.001 16.001A8 8 0 0010 2zm0 14a6 6 0 11-.001-12.001A6 6 0 0110 16z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">North-Facing Advantage</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Enjoy stunning north-facing views of the Himalayas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyHighlights;
