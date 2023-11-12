import Link from "next/link";
import React from "react";

const NavLink = ({
  children,
  className,
  link,
  ...rest
}: {
  children: React.ReactNode;
  link: string;
  className?: string;
}) => {
  return (
    <div {...rest} className={`uppercase ${className}`}>
      {children}
    </div>
  );
};

export default NavLink;
