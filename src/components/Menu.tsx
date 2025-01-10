"use client";

import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div className="md:hidden border border-grey-500 px-6 py-4">
          <div className="flex flex-col">
            <a className="my-3 text-gray-700 hover:text-gray-900">Home</a>
            <a className="my-3 text-gray-700 hover:text-gray-900 flex gap-2 ">
              Products
              <button onClick={() => setIsProductsOpen((prev) => !prev)}>
                {!isProductsOpen ? (
                  <SlArrowDown className="w-3.5" />
                ) : (
                  <SlArrowUp className="w-3.5" />
                )}
              </button>
            </a>
            <a className="my-3 text-gray-700 hover:text-gray-900 flex gap-2">
              Resources
              <button onClick={() => setIsResourcesOpen((prev) => !prev)}>
                {!isResourcesOpen ? (
                  <SlArrowDown className="w-3.5" />
                ) : (
                  <SlArrowUp className="w-3.5" />
                )}
              </button>
            </a>
            <a className="my-3 text-gray-700 hover:text-gray-900">Pricing</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
