import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`px-12 py-2.5 rounded-full bg-primary text-white text-center border-none outline-none hover:bg-primary-hover duration-150 font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
