import Image from "next/image";
import React from "react";
import zysk_logo from "..//..//assets/zysk_logo.svg";
import avatar2 from "..//..//assets/Avatar2.svg";
import down_arrow from "../../assets/down_arrow.svg";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-12">
        <div className="flex flex-row gap-16">
          <div>
            <Image src={zysk_logo} alt="Zysk Logo" width={80} />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <a href="#" className="flex gap-1 hover:text-gray-900">
              Products
              <Image src={down_arrow} alt="icon" width={22} />
            </a>
            <a href="#" className="flex gap-1 hover:text-gray-900">
              Resources
              <Image src={down_arrow} alt="icon" width={22} />
            </a>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
          </nav>
        </div>

        <div className="hidden md:block rounded-full w-10 h-10 overflow-hidden">
          <Image
            src={avatar2}
            alt="Profile Picture"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>

        <button className="md:hidden text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
