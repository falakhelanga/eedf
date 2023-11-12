import React from "react";

const ContentWrapper = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div {...rest} className={`mx-auto w-full max-w-7xl px-8 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
