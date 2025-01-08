import React from "react";
import Image from "next/image";
import zysk_boltshift from "../../assets/zysk_boltshift.svg";
import zysk_lightbox from "../../assets/zysk_lightbox.svg";
import zysk_featherdev from "../../assets/zysk_featherdev.svg";
import zysk_spherule from "../../assets/zysk_spherule.svg";
import zysk_globalbank from "../../assets/zysk_globalbank.svg";
import zysk_nietzsche from "../../assets/zysk_nietzsche.svg";

const Companies = () => {
  return (
    <div className="text-center">
      <div className="mt-20 text-sm text-gray-600">
        Join 4,000+ companies already growing
      </div>
      <div className="flex flex-wrap mb-20 items-center justify-center space-x-6 mt-4">
        <Image src={zysk_boltshift} alt="boltshift" className="w-32 md:w-36" />
        <Image src={zysk_lightbox} alt="lightbox" className="w-32 md:w-36" />
        <Image
          src={zysk_featherdev}
          alt="featherdev"
          className="w-32 md:w-36"
        />
        <Image src={zysk_spherule} alt="spherule" className="w-32 md:w-36" />
        <Image
          src={zysk_globalbank}
          alt="globalbank"
          className="w-32 md:w-36"
        />
        <Image src={zysk_nietzsche} alt="nietzsche" className="w-32 md:w-36" />
      </div>
    </div>
  );
};

export default Companies;
