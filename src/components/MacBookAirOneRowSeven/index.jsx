import React from "react";
import { Text, Heading } from "./..";

export default function MacBookAirOneRowSeven({
  loremipsumTwo,
  price = "Lorem ipsum dolor | 28-12-23",
  description = "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full p-3.5 border-2 border-solid blue_gray_900_gray_900_01_border bg-blue_gray-900_01 shadow-xs rounded-[24px]">
        <div className="flex flex-col mt-2.5 gap-2.5">
          <Heading size="xs" as="h1" className="flex tracking-[0.38px] underline">
            <span className="text-white-A700">Lorem ipsum dolor sit </span>
            <span className="text-red-700">amet</span>
          </Heading>
          <Text size="s" as="p" className="!text-gray-500 tracking-[0.38px] underline">
            {price}
          </Text>
          <Text size="xs" as="p" className="!text-gray-500 tracking-[0.38px] underline">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
