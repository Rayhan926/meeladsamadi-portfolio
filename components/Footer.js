import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#272727] py-5">
      <div className="container flex justify-center">
        All rights reserved &nbsp;{" "}
        <span className="text-primary"> Meelad Samadi</span>,{" "}
        {new Date().getFullYear().toString()}
      </div>
    </footer>
  );
};

export default Footer;
