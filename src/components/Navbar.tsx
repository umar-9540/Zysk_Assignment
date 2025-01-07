import Image from "next/image";
import React from "react";
import zysk_logo from "..//..//assets/zysk_logo.svg";
import zysk_profile from"..//..//assets/zysk_profile.jpeg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-28 py-4 border">
      <div className="flex items-center space-x-14">
      <Image src={zysk_logo} alt="logo" />
        <ul className="flex space-x-7 font-bold">
          <li>Home</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <Image src={zysk_profile} alt="profile" className="w-10 h-10 rounded-full"/>
    </nav>
  );
};

export default Navbar;
