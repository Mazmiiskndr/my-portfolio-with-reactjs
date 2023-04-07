import React from "react";
import Section from "./common/Section";
import { TESTIMONIALS } from "./data/Testimonials";

const Testimonials = () => {
  return (
    <Section
      title="Testimonials 💬"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nam, distinctio eum velit neque debitis quibusdam iure ducimus beatae a officiis deserunt? Officiis,"
    >
      <div className="max-w-xl flex flex-col gap-2 ">
        {TESTIMONIALS.map((testimonial) => {
          return (
            <div
              className="flex p-4 justify-center 
              items-center rounded-xl shadow-md dark:shadow-gray-300
              hover:scale-110 duration-300 mb-3"
            >
              <div className="w-1/3">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 object-cover
                object-top pt-2" />
              </div>

              <div className="w-2/3 flex flex-col justify-center items-center
              gap-3 p-2">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm font-extralight">{testimonial.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Testimonials;
