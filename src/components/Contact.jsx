import React from "react";
import Section from "./common/Section";
import { SOCIAL } from "./data/Socials";
import mobile from "../assets/mobile.png";
import Form from "./data/Form";

const Contact = () => {
  return (
    <Section
      title="Contact 📞"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. :)"
    >
      <div
        className="flex flex-col items-center
      justify-center gap-8 text-center"
      >
        <div>
          <img
            src={mobile}
            alt="Contact"
            className="w-32 h-32 hover:scale-110 duration-300"
          />
        </div>

        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et nam
            dolor maiores. Ipsam, ipsa! Perspiciatis rerum corporis ut.
          </p>
        </div>

        <div
          className="flex w-full items-center justify-evenly text-3xl
        "
        >
          {SOCIAL.map((social) => {
            return (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300 hover:text-blue-600"
              >
                {social.icon}
              </a>
            );
          })}
        </div>
        {/* Bottom Form */}
        <Form/>

        
      </div>
    </Section>
  );
};

export default Contact;
