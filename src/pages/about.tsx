import React from "react";
import Image from "next/image";

// import Particles from 'react-particles-js';
// import { tsParticles } from "tsparticles";
// import Particles from "react-tsparticles";
// import Particles from "react-tsparticles";

const About = () => {
  // const mystyle = {
  //     filter: sepia(1);
  // };

  return (
    <div className="bg-skin-fill">
    <div className="bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block dark:text-skin-white">About our team</span>
        <span className="block text-skin-base">Start your free trial today.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-skin-fill hover:bg-skin-fill"
          >
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-skin-base bg-white hover:bg-indigo-50
            dark:bg-skin-bgdark dark:text-skin-white dark:border-gray-100
            "
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  
  
  </div>
  );
};

export default About;
