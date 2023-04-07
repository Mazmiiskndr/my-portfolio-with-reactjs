import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";
import { SOCIAL } from "./data/Socials";
import useScroll from "./hooks/UseScroll";

const Hero = () => {
  const handleScroll = () => {
    const downArrow = document.querySelector(".down-arrow");
    if (window.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  };

  useScroll(handleScroll);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-blue-600 uppercase font-bold">
        Moch Azmi Iskandar
      </h2>
      <h3 className="py-3 text-2xl">Web Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit
        dolore esse, voluptatem natus alias aliquid architecto cupiditate in
        dolores rerum illo quasi quia.
      </p>

      {/* Social Icons */}
      <div
        className="flex justify-evenly py-8 
      lg:pt-16 text-3xl w-full md:w-1/3"
      >
        {SOCIAL.map((social) => {
          const { id, link, icon } = social;
          return (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer duration-300 
              text-3xl text-gray-500 
              mx-2 hover:text-blue-600"
            >
              {icon}
            </a>
          );
        })}
      </div>

      {/* Avatar and Resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="rounded-xl w-48 
          h-60 md:w-48 object-cover object-top 
          bg-gradient-to-b from-blue-600 pt-5"
        />
        <a
          href="/resume.pdf"
          download={true}
          className="flex items-center 
        justify-center mt-10 bg-gradient-to-r from-blue-600 to-teal-500 
        text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* Arrow Down Animation */}
      <div className="mt-10 down-arrow">
        <FaArrowAltCircleDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
