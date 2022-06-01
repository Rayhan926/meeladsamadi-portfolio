import React from "react";
import Button from "./Button";
import SectionTitleSubtitle from "./SectionTitleSubtitle";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import Globe from "./Icons/Globe";

const contactOptions = [
  {
    icon: <IoLocationSharp size={65} />,
    title: "23 Pallock Hill Way,",
    subtitle: "Whitby ON L1R 0N5, Canada",
  },
  {
    icon: <Globe />,
    title: "MeeladSamadi@hotmail.com",
    subtitle: "MeeladSamadi.com",
  },
  {
    icon: <FaMobileAlt size={65} />,
    title: "+1(905) 922-1737",
  },
];

const ContactSection = () => {
  return (
    <section className="pt-[200px] pb-[60px]">
      <div className="container">
        <SectionTitleSubtitle
          title={"Contact Me"}
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi tempore atque, natus ex ut voluptate eaque reiciendis sapiente! Eaque!"
        />

        <div className="mt-20 grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-[55%,auto] gap-y-14 gap-x-14">
          <div>
            <form className="space-y-7">
              <input type="text" className="__input" placeholder="Name" />
              <input type="email" className="__input" placeholder="Email" />
              <input type="text" className="__input" placeholder="Phone" />
              <textarea
                className="__input rounded-[25px] resize-none"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>

              <div>
                <Button>Message Me</Button>
              </div>
            </form>
          </div>

          <div className="rounded-md overflow-hidden h-full min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4078828986003!2d114.17631091529671!3d22.30040878532345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8cd3564f2088f666!2zMjLCsDE4JzAxLjUiTiAxMTTCsDEwJzQyLjYiRQ!5e0!3m2!1sen!2sbd!4v1646553246131!5m2!1sen!2sbd"
              width={"100%"}
              height={"100%"}
              style={{ border: 0, filter: "invert(90%)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-10 mt-28">
          {contactOptions.map(({ icon, title, subtitle }, i) => (
            <div className="flex flex-col items-center">
              <div className="text-primary">{icon}</div>
              <p className="text_sm text-base text-white mt-8">{title}</p>
              {subtitle && (
                <p className="text_sm text-base text-white">{subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
