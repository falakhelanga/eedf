import React from "react";
import ContentWrapper from "./contentWrapper";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "about",
    link: "about",
  },
  {
    name: "mission",
    link: "mission",
  },
];

const NavBar = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
      }}
      className="bg-white h-[10vh] w-full sticky top-0 right-0 z-[10]"
    >
      <ContentWrapper className="flex justify-between items-center h-full">
        <div className="text-3xl font-bold">Logo</div>
        <div className="text-black flex md:hidden">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <div className="md:flex hidden gap-10 ">
          {links.map((item) => (
            <NavLink key={item.link} link={item.link}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NavBar;
