import React from "react";

const SectionTitleSubtitle = ({ title, subtitle }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="title_lg mb-2.5">{title}</h2>
        <p className="text_lg sm:max-w-[80%] md:max-w-[600px] lg:max-w-[900px] mt-6 mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionTitleSubtitle;
