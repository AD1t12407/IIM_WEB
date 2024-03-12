import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
};
const variants = {
  fill: {
    gray_900_02: "bg-gray-900_02 shadow-3xl text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 shadow-md text-white-A700",
    red_700: "bg-red-700 shadow-md text-white-A700",
  },
};
const sizes = {
  md: "h-[63px] px-[35px] text-[22px]",
  lg: "h-[69px] px-[35px] text-xl",
  sm: "h-[58px] px-[35px] text-xl",
  xs: "h-[42px] px-[15px] text-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "gray_900_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 tracking-[0.38px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_900_02", "blue_gray_900_01", "red_700"]),
};

export { Button };
