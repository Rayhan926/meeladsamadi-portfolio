import React from "react";
import SectionTitleSubtitle from "./SectionTitleSubtitle";
import Button from "../components/Button";

const PortfolioSection = () => {
  return (
    <section className="pt-[150px] pb-[50px] relative" id="portfolio">
      <img
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[650px] absolute bottom-0 translate-y-[-80%] translate-x-[35%] z-[-1] right-0 rotate-[-90deg]"
      />
      <img
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[650px] absolute left-0 translate-y-[50%] -translate-x-[30%] bottom-0 z-[-1] right-0"
      />

      <SectionTitleSubtitle
        title={"Portfolio"}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi tempore atque, natus ex ut voluptate eaque reiciendis sapiente! Eaque!"
      />

      <div className="container mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div key={e} className=" h-[230px] bg-white"></div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-white text-primary hover:text-white">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
