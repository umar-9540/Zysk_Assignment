import Image from "next/image";
import React from "react";
import zysk_image1 from "../../assets/zysk_image 1.svg";
import demo from "../../assets/demo.svg";
import { GoArrowRight } from "react-icons/go";

const Main = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-6 items-center py-16 text-center">
        <div className="flex w-[260px] md:w-[325px] mx-auto gap-2 md:gap-4 py-1 mb-4 items-center bg-red-50 border border-purple-400 md:border-red-500 rounded-full hover:bg-red-100">
          <div className="bg-white text-red-600 text-[11px] md:text-sm ml-1 font-medium px-1 py-0.5 border border-purple-400 md:border-red-500 rounded-full">
            New feature
          </div>
          <a
            href="#"
            className="flex gap-1 text-[11px] md:text-sm items-center text-red-600 font-medium"
          >
            Check out the team dashboard
            <GoArrowRight className="w-4 h-5 text-purple-600 md:text-red-600" />
          </a>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Beautiful analytics to grow smarter
        </h1>

        <div className="w-3/4 mx-auto mt-4 text-gray-600 text-base md:text-lg">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </div>

        <div className="mt-6 flex flex-col md:flex-row-reverse justify-center gap-3">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600">
            Sign up
          </button>
          <button className="flex items-center justify-center gap-1 px-6 py-3 border border-gray-300 shadow text-gray-800 font-semibold rounded-full hover:bg-gray-100">
            <Image src={demo} alt="icon" width={22} />
            Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-20 px-4 md:px-20">
        <Image
          src={zysk_image1}
          alt=""
          width={1280}
          height={560}
          className="border-4 md:border-8 border-black rounded-3xl"
        />
      </div>
    </main>
  );
};

export default Main;
