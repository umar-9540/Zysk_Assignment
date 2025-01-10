"use client";

import Image from "next/image";
import React, { useState } from "react";
import zysk_logo from "..//..//assets/zysk_logo.svg";
import avatar2 from "..//..//assets/Avatar2.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <div className="flex flex-row gap-16">
          <div>
            <Image src={zysk_logo} alt="Zysk Logo" width={80} />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <a href="#" className="flex gap-2 items-center hover:text-gray-900">
              Products
              <button onClick={() => setIsProductsOpen((prev) => !prev)}>
                {!isProductsOpen ? (
                  <SlArrowDown className="w-3.5" />
                ) : (
                  <SlArrowUp className="w-3.5" />
                )}
              </button>
              {isProductsOpen && (
                <div className="bg-red-200 absolute top-12 rounded-lg py-2 px-4">
                  <div className="">
                    <h3 className="hover:text-blue-900">Product 1</h3>
                    <h3 className="hover:text-blue-900">Product 2</h3>
                    <h3 className="hover:text-blue-900">Product 3</h3>
                  </div>
                </div>
              )}
            </a>
            <a href="#" className="flex gap-2 items-center hover:text-gray-900">
              Resources
              <button onClick={() => setIsResourcesOpen((prev) => !prev)}>
                {!isResourcesOpen ? (
                  <SlArrowDown className="w-3.5" />
                ) : (
                  <SlArrowUp className="w-3.5" />
                )}
              </button>
              {isResourcesOpen && (
                <div className="bg-red-200 absolute top-12 rounded-lg py-2 px-4">
                  <div>
                    <h3 className="hover:text-blue-900">Resource 1</h3>
                    <h3 className="hover:text-blue-900">Resource 2</h3>
                    <h3 className="hover:text-blue-900">Resource 3</h3>
                  </div>
                </div>
              )}
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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <FiMenu className="h-6 w-6" />
        </button>
        
      </div>
      <Menu isOpen={isMenuOpen} />
    </header>
  );
};

export default Navbar;
