import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Projects } from "./data/Projects";

const Portfolio = () => {
  
  return (
    <Section
      title="Portfolio 💼"
      subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    >
      <div className="grid  gap-8 lg:gap-14 lg:grid-cols-2">
        {Projects.map((project) => {
          return (
            <div
              key={project.id}
              className="max-w-lg flex shadow-lg
            shadow-gray-300 rounded-2xl overflow-hidden hover:scale-110 duration-300"
            >
              <img src={project.image} alt={project.title} className="w-2/3" />

              <div
                className="w-1/3 flex flex-col items-center justify-evenly
              p-1"
              >
                <h2>{project.title}</h2>
                <a
                  className="text-3xl cursor-pointer duration-150 hover:scale-150"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-150"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Portfolio;
