import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const headerNavLinks = [
  {
    text: "About Me.",
    url: "#about-me",
  },
  {
    text: "Services.",
    url: "#services",
  },
  {
    text: "Portfolio.",
    url: "#portfolio",
  },
  {
    text: "Hire Me.",
    url: "#hire-me",
  },
];

const Header = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const shouldCloseMobileNav = (e) => {
    if (e.target.id === "mobileNavOverley") {
      setIsOpenMobileNav(false);
    }
  };

  return (
    <header className="lg:absolute top-0 left-0 w-full z-[5] pt-5">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <a className="text-[40px] font-bold italic leading-[32px]">
            <p>Mellad</p>
            <p className="mt-1.5 ml-2">Samadi</p>
          </a>
        </Link>

        <div
          id="mobileNavOverley"
          onClick={shouldCloseMobileNav}
          className={`fixed top-0 left-0 w-full h-screen overflow-hidden bg-black/40 z-[50] md:bg-transparent md:static md:w-auto md:h-auto ${
            isOpenMobileNav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none delay-100"
          } md:pointer-events-auto md:opacity-100 duration-200 shrink-0`}
        >
          <ul
            style={{
              transitionProperty: "transform",
            }}
            className={`flex flex-col items-start md:flex-row md:items-center text-lg gap-0 md:gap-10 font-medium bg-white border-r-4 border-primary md:bg-transparent w-[320px] h-full md:border-r-0 md:w-auto md:h-auto pt-6 md:pt-0
            ${isOpenMobileNav ? "translate-x-0 delay-100" : "-translate-x-full"}
            md:translate-x-0 duration-200
            `}
          >
            {headerNavLinks.map(({ url, text }, i) => (
              <li key={i}>
                <Link href={url}>
                  <a
                    className={`
                    hover:text-primary duration-150 py-2.5 md:py-5 block px-6 md:px-0
                    text-gray-soft font-semibold
                    `}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`md:hidden duration-300 ${
            isOpenMobileNav ? `pointer-events-none z-[9999] text-black` : ""
          }`}
          onClick={() => setIsOpenMobileNav(true)}
        >
          {isOpenMobileNav ? <IoClose size={30} /> : <FiMenu size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
