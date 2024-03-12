import React from "react";

const sizes = {
  xs: "text-[7px] font-medium leading-3",
  lg: "text-xl font-medium leading-[30px]",
  s: "text-[10px] font-medium leading-[15px]",
  "2xl": "text-[22px] font-medium leading-[33px]",
  "3xl": "text-4xl font-medium leading-[54px]",
  "4xl": "text-[38px] font-normal leading-[57px]",
  xl: "text-[21px] font-light leading-7",
  md: "text-[17px] font-light leading-[25px]",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
