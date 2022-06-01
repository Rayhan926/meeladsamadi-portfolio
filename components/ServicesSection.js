import React from "react";
import SectionTitleSubtitle from "./SectionTitleSubtitle";
import { MdOutlineLaptopWindows } from "react-icons/md";
import Button from "../components/Button";
import UiIcon from "../components/Icons/UiIcon";
import { FaMobileAlt } from "react-icons/fa";
import GraphicDesignIcon from "./Icons/GraphicDesignIcon";

const servicesCards = [
  {
    icon: <UiIcon />,
    title: "USER INTERFACE DESIGN",
    subtitle:
      "#Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    icon: <FaMobileAlt className="w-[120px] h-[120px]" color="#969696" />,
    title: <span className="text-primary">MOBILE APP DESIGN</span>,
    subtitle:
      "#Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    icon: <GraphicDesignIcon />,
    title: "GRAPHIC DESIGN",
    subtitle:
      "#Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-[100px] pb-[50px]">
      <SectionTitleSubtitle
        title={"My Services"}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi tempore atque, natus ex ut voluptate eaque reiciendis sapiente! Eaque!"
      />

      <div className="container mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {servicesCards.map(({ icon, title, subtitle }, i) => (
            <div
              className="flex flex-col justify-center items-center text-center px-6 py-5"
              key={i}
            >
              <div className="max-w-[200px] mb-12">{icon}</div>
              <h2 className="title_sm text-xl text-white uppercase">{title}</h2>
              <p className="text_sm text-base mt-5">{subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#hire-me">
            <Button>Hire Me</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
