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
            shadow-gray-300 rounded-2xl overflow-hidden "
            >
              <img src={project.image} alt={project.title} className="w-2/3" />

              <div
                className="w-1/3 flex flex-col items-center justify-evenly
              p-1"
              >
                <h2>{project.title}</h2>
                <a href={project.github}>
                  <FaGithub />
                </a>
                <a href={project.demo}>
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
