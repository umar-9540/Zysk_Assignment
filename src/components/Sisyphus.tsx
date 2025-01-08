import Image from "next/image";
import React from "react";
import zysk_candice from "../../assets/zysk_candice.png";
import zysk_sisyphus from "../../assets/zysk_sisyphus.svg";

const Sisyphus = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center space-x-2">
            <Image src={zysk_sisyphus} alt="sisyphus" />
          </div>
        </div>

        <p className="text-2xl mx-5 font-semibold text-gray-800 sm:text-3xl mb-6">
          We&apos;ve been using Untitled to kick start every new project and
          can&apos;t imagine working without it.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Image
            src={zysk_candice}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-gray-900">Candice Wu</p>
            <p className="text-gray-600 text-sm">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sisyphus;
