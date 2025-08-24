import React from "react";

const About = () => {
  return (
    <div className="w-full py-8">
      <div className="w-4xl mx-auto  h-full">
        <h1 className="text-center text-5xl font-bold">About Us</h1>
        <p className="text-xl mt-4 text-neutral-700 dark:text-neutral-300 ">
          <span className="text-2xl font-bold">&ldquo;</span>We are a team of three students from the Academy of Technology driven
          by the idea of empowering freshers in their career journey. Our
          project is designed to help students and job seekers identify roles
          they are best suited for, while also preparing them for the
          opportunities they are targeting. By analyzing job descriptions and
          simulating real interview scenarios, we aim to bridge the gap between
          academic learning and industry expectations, giving candidates the
          confidence and clarity they need to succeed.<span className="text-2xl font-bold">&rdquo;</span>
        </p>
      </div>
    </div>
  );
};

export default About;
