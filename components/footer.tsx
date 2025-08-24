import React from "react";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-green-400/5  w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={"/images/avatar1.png"} className="w-10" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            magni recusandae quod, nostrum, laborum vel repudiandae illo
            assumenda, eum maxime optio aliquam sunt libero dicta.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
          <h3 className="text-neutral text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 ">
            <a
              href="#Header"
              className="hover:text-black dark:hover:text-neutral-500"
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:text-black dark:hover:text-neutral-500"
            >
              About Us
            </a>
            <a
              href="#Contact"
              className="hover:text-black dark:hover:text-neutral-500"
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-neutral text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-green-300/5 text-gray-400 border border-green-700 focus:outline-none w-full md:w-auto"
            />
            {/* <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button> */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 ">
        Copyright 2025 © ByteWise. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
