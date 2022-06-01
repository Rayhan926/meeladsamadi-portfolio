import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="">
      <div className="container flex min-h-screen items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[60%,auto]">
          <div className="h-full flex flex-col justify-center lg:-translate-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
              <p>Professional</p>
              <p className="mt-3 md:mt-5">Graphic Designer</p>
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
              <Button>Hire Me</Button>
            </div>
          </div>

          <div>
            <img src="/img/MyPhoto.png" alt="MyPhoto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
