import React from "react";

const sizes = {
  "3xl": "text-5xl font-bold leading-[72px]",
  "2xl": "text-[45px] font-bold leading-[68px]",
  xl: "text-[40px] font-bold leading-[60px]",
  "4xl": "text-[62px] font-bold leading-[94px]",
  s: "text-xl font-extrabold leading-6",
  md: "text-[26px] font-semibold leading-[39px]",
  xs: "text-xs font-semibold leading-[18px]",
  lg: "text-4xl font-semibold leading-[54px]",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
