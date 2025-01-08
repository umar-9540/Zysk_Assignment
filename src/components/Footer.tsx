import Image from "next/image";
import React from "react";
import zysk_logo from "../../assets/zysk_logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      <section className="w-full py-16 text-center">
        <h1 className="text-3xl font-bold">Start your free trial</h1>
        <p className="mt-5 text-lg text-gray-600">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-7 flex flex-col-reverse mx-4 md:flex-row justify-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 shadow">
            Learn more
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Get started
          </button>
        </div>
      </section>

      <footer className="w-full bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 py-10 px-6 text-gray-600 font-bold">
          {/* Product */}
          <div>
            <h3 className="text-gray-500 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Solutions{" "}
                  <span className="text-green-700 text-xs font-medium border border-green-300 bg-green-50 rounded-full px-1.5 py-0.5 hover:no-underline">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-500 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Media kit
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-500 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Help centre
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <h3 className="text-gray-500 mb-4">Use cases</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Startups
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Government
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  SaaS centre
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Marketplaces
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Ecommerce
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-500 mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  AngelList
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-500 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zysktech/"
                  target="_blank"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 px-6 md:flex md:px-14 py-4 items-center justify-between">
          <div>
            <Image src={zysk_logo} alt="logo" />
          </div>
          <div className="text-sm text-gray-500 my-6">
            © 2077 zysktechnologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
