import Image from "next/image";
import Navbar from "@/components/Navbar";
import zysk_boltshift from "../../assets/zysk_boltshift.svg";
import zysk_lightbox from "../../assets/zysk_lightbox.svg";
import zysk_featherdev from "../../assets/zysk_featherdev.svg";
import zysk_spherule from "../../assets/zysk_spherule.svg";
import zysk_globalbank from "../../assets/zysk_globalbank.svg";
import zysk_nietzsche from "../../assets/zysk_nietzsche.svg";
import Features from "@/components/Features";
import Sisyphus from "@/components/Sisyphus";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="w-40 h-40 border-2 border-red-700 mx-auto">
        <div className=""></div>
        {/* <button className="flex flex-row px-1 py-1 border-2 border-red-300 bg-red-50 rounded-full text-red-600 text-sm font-semibold space-x-3 items-center">
          <div className="px-2 border-2 border-red-300 bg-white rounded-full">
            New feature
          </div>
          <div>Check out the team dashboard </div>
        </button>
        <div className="text-5xl font-bold mt-4">
          Beautiful analytics to grow smarter
        </div>
        <p className="text-gray-600 mt-7">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
        </p>
        <p className="text-gray-600">
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center space-x-4 mt-9">
          <button className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full">
            Demo
          </button>
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full">
            Sign up
          </button>
        </div> */}

        {/* <img src="/zysk_assignment" alt="zysk_image 1" /> */}
      </div>

      <div className="text-center">
        <div className="text-sm">Join 4,000+ companies already growing</div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <Image src={zysk_boltshift} alt="boltshift" className="w-36" />
          <Image src={zysk_lightbox} alt="lightbox" className="w-36" />
          <Image src={zysk_featherdev} alt="featherdev" className="w-36" />
          <Image src={zysk_spherule} alt="spherule" className="w-36" />
          <Image src={zysk_globalbank} alt="globalbank" className="w-36" />
          <Image src={zysk_nietzsche} alt="nietzsche" className="w-36" />
        </div>
      </div>

      <Features />
      <Sisyphus />
      <Faqs />
    </div>
  );
}
