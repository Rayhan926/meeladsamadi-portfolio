import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section id="about-me" className="relative">
      <img
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[320px] absolute top-0 left-0 rotate-[90deg] -translate-y-[25%] -translate-x-[25%]"
      />

      <img
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[750px] absolute bottom-0 translate-y-[20%] right-0"
      />

      <img
        src="/img/Flower1.png"
        alt="Flower"
        className="w-[500px] absolute bottom-0 left-0 rotate-[110deg] -translate-x-[40%] translate-y-[40%]"
      />

      <div className="absolute pointer-events-none bottom-0 z-[5] left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black"></div>

      <div className="container flex min-h-screen items-center relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[60%,auto]">
          <div className="h-full flex flex-col justify-center translate-y-[5%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-segoe-bold font-bold uppercase">
              <p>Professional</p>
              <p className="mt-3 md:mt-4">Graphic Designer</p>
            </h1>
            <p className="text_md mt-5 lg:w-[75%] hidden md:block">
              Many years with Technology have lead to the Mastery of Hardware{" "}
              {"&"}
              Software of Computers. After my time with computers, I have been
              involved with programming scripts, application creation as well as
              game development and hardware repairs with computers/mobiles.
              Great pleasure working with designs of UI, UX and logos! Let's
              work together to make business better!
            </p>

            <div className="mt-6">
              <a href="#hire-me" className="inline-block">
                <Button>Hire Me</Button>
              </a>
            </div>
          </div>

          <div className="flex items-end overflow-hidden">
            <img
              src="/img/MyPhoto.png"
              className="translate-y-[5%]"
              alt="MyPhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
