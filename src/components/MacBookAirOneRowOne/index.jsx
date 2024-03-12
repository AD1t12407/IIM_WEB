import React from "react";
import { Text } from "./..";

export default function MacBookAirOneRowOne({ machine, ...props }) {
  return (
    <div {...props}>
      <div className="flex sm:flex-col justify-end items-center w-[86%]">
        <Text size="4xl" as="p" className="flex tracking-[0.38px] text-center !font-medium">
          <span className="text-white-A700">Aspiring Student </span>
          <span className="text-red-700">Entr </span>
        </Text>
        <div className="self-start h-[52px] w-[5px] sm:w-[52px] sm:h-[5px] ml-[-5px] bg-red-700" />
      </div>
    </div>
  );
}
