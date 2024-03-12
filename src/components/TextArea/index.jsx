import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  tarOutlineGray9007f: "bg-blue_gray-900_01 shadow-lg",
};
const sizes = {
  xs: "h-[171px] p-5 text-[22px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape = "",
      size = "xs",
      variant = "tarOutlineGray9007f",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapes[shape] || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarOutlineGray9007f"]),
};

export { TextArea };
