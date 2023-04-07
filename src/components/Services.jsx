import React from "react";
import Section from "./common/Section";
import { ServicesData } from "./data/ServicesData";

const Services = () => {

  return (
    <Section
      title="Services 👨‍💻"
      subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Corporis placeat alias culpa reiciendis hic quae perferendis molestias accusantium enim non?"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {ServicesData.map((service) => {
          const { id, image, title } = service;
          return (
            <div key={id} className="flex flex-col items-center
            justify-center p-5 shadow-lg dark:shadow-gray-100 
            rounded-xl duration-300 ease-in-out hover:scale-110">
              <img src={image} alt={title} className="w-36 h-36 md:w-30" />
              <h3 className="mt-5 text-base">{title}</h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
