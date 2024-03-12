import React from "react";
import { Text, Heading, Img } from "./..";

export default function MacBookAirOneColumn({
  content = "Innovation culture in college",
  arobusttool = " A robust tool designed for content creators, bloggers, and writers",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center p-[23px] sm:p-5 bg-blue_gray-900_01 shadow-sm rounded-[10px]">
        <Img src="images/img_rectangle_65.png" alt="image" className="self-stretch mt-2 object-cover rounded-[16px]" />
        <Heading size="md" as="h1" className="mt-[13px] tracking-[0.38px] text-center">
          {content}
        </Heading>
        <Text size="md" as="p" className="w-[87%] md:w-full mt-1.5 mb-[74px] tracking-[0.38px] text-center">
          {arobusttool}
        </Text>
      </div>
    </div>
  );
}
