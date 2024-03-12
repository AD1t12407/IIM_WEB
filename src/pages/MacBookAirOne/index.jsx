import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, TextArea, Input } from "../../components";
import MacBookAirOneColumn from "../../components/MacBookAirOneColumn";
import MacBookAirOneRowFive from "../../components/MacBookAirOneRowFive";
import MacBookAirOneRowOne from "../../components/MacBookAirOneRowOne";
import MacBookAirOneRowSeven from "../../components/MacBookAirOneRowSeven";
import MacBookAirOneRowSix from "../../components/MacBookAirOneRowSix";

export default function MacBookAirOnePage() {
  return (
    <>
      <Helmet>
        <title>IIMWEB!</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-4 bg-gray-900_02">
        <div className="w-full mt-4 mb-[5px] mx-auto md:p-5 max-w-[1247px]">
          <div className="p-[22px] sm:p-5 bg-black-900">
            <div className="mt-4 mr-[9px]">
              <div className="flex flex-col items-center">
                <header className="flex self-stretch justify-center items-center gap-[22px]">
                  <div className="flex md:flex-row gap-[22px] flex-1">
                    <div className="flex justify-center w-full">
                      <div className="flex justify-center w-full">
                        <a
                          href="#"
                          className="flex justify-center items-center h-[42px] px-[35px] py-1 sm:px-5 bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                        >
                          <Text size="2xl" as="p" className="tracking-[0.38px] text-center">
                            Home
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <div className="flex justify-center w-full">
                        <a
                          href="#"
                          className="flex justify-center items-center h-[42px] px-[22px] py-1 sm:px-5 bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                        >
                          <Text size="2xl" as="p" className="tracking-[0.38px] text-center">
                            About Us
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-[13%]">
                    <div className="w-full">
                      <Button className="w-full font-medium rounded-[21px]">Our Vision</Button>
                    </div>
                  </div>
                  <div className="flex md:flex-row gap-[22px] flex-1">
                    <div className="flex justify-center w-full">
                      <div className="flex justify-center w-full">
                        <Text
                          size="2xl"
                          as="p"
                          className="flex justify-center items-center h-[42px] pt-1.5 pb-0.5 px-2 tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                        >
                          Our Activity
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <div className="flex justify-center w-full">
                        <Text
                          size="2xl"
                          as="p"
                          className="flex justify-center items-center h-[42px] pt-[7px] pb-px px-[33px] sm:px-5 tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                        >
                          Gallery
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row gap-[22px] flex-1">
                    <div className="flex justify-center w-full">
                      <div className="w-full">
                        <Button className="w-full sm:px-5 font-medium rounded-[21px]">Team</Button>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <div className="w-full">
                        <Button className="w-full font-medium rounded-[21px]">Contact Us</Button>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="h-[300px] w-[300px] mt-[67px] bg-gradient shadow-xl rounded-[50%]" />
                <div className="flex justify-center w-[55%] md:w-full mt-9">
                  <div className="flex flex-col items-center">
                    <Text size="4xl" as="p" className="tracking-[0.38px] text-center">
                      Hey, we are{" "}
                    </Text>
                    <Heading size="4xl" as="h1" className="mt-[-16px] tracking-[0.38px] text-center">
                      Idea Incubator MGIT
                    </Heading>
                  </div>
                </div>
                <MacBookAirOneRowOne className="flex justify-end items-center w-[40%] md:w-full mt-1.5" />
                <div className="flex justify-between w-[36%] md:w-full mt-[17px] gap-5">
                  <div className="flex justify-center w-[41%]">
                    <Button size="md" shape="round" className="w-full sm:px-5 font-medium !shadow-2xl">
                      JOIN US!
                    </Button>
                  </div>
                  <div className="flex justify-center w-[41%]">
                    <Text
                      size="2xl"
                      as="p"
                      className="flex justify-center items-center h-[63px] px-[5px] py-[15px] tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts rounded-[24px]"
                    >
                      IDEA VALIDATE
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between w-[14%] md:w-full mt-[21px] gap-5 p-[11px]">
                  <Img
                    src="images/img_facebook_white.svg"
                    alt="facebookwhite"
                    className="h-[20px] w-[20px] ml-[11px]"
                  />
                  <Img src="images/img_instagram_white.svg" alt="instagramwhite" className="h-[20px] w-[20px]" />
                  <Img
                    src="images/img_github_white.svg"
                    alt="githubwhite_one"
                    className="h-[20px] w-[20px] mr-[11px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pl-14 pr-[77px] py-[77px] md:p-5 bg-black-900">
            <div className="flex flex-col items-center w-[97%] mt-[57px] mb-[45px] gap-[122px]">
              <div className="flex flex-col items-end w-[86%] md:w-full">
                <div className="self-stretch h-[2px] w-full bg-red-700 rounded-[1px]" />
                <div className="h-[2px] w-[32%] mt-[-2px] bg-yellow-800 rounded-[1px]" />
              </div>
              <div className="self-stretch p-[22px] sm:p-5">
                <div className="flex md:flex-col items-center gap-7 my-[13px]">
                  <div className="w-full pt-2.5 px-2.5 bg-gradient shadow-xl rounded-[25px]">
                    <div>
                      <Img
                        src="images/img_whatsapp_image_2024_03_12.png"
                        alt="whatsappimage"
                        className="h-[383px] w-full object-cover rounded-[25px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col">
                      <Heading size="2xl" as="h2" className="ml-[33px] tracking-[0.38px] text-center">
                        About Us{" "}
                      </Heading>
                      <div className="mt-[-17px]">
                        <Text as="p" className="tracking-[0.38px] text-center !font-normal">
                          Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                          research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head.
                          Since then it runs with motivation to develop roots of entrepreneurship and innovation in
                          students through nurturing skills like finding and solving real world problem, creative
                          thinking, networking, management.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-[75px] pr-14 gap-[33px] py-[75px] md:p-5 bg-black-900">
            <Heading as="h2" className="ml-[43px] tracking-[0.38px] text-center">
              OUR VISION
            </Heading>
            <div className="flex flex-col w-[92%] md:w-full mb-4 ml-[54px] gap-[39px]">
              <div className="flex flex-col items-end">
                <div className="self-stretch h-[3px] w-full bg-red-700 rounded-[1px]" />
                <div className="h-[3px] w-[32%] mt-[-3px] bg-yellow-800 rounded-[1px]" />
              </div>
              <div className="flex md:flex-col w-[97%] md:w-full gap-[35px]">
                <MacBookAirOneColumn className="flex flex-col w-full" />
                <MacBookAirOneColumn className="flex flex-col w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col gap-[29px] p-[30px] sm:p-5 bg-black-900">
            <MacBookAirOneColumn className="flex flex-col w-full mb-[243px] ml-[121px]" />
            <MacBookAirOneColumn className="flex flex-col w-full mb-[243px] mr-[125px]" />
          </div>
          <div className="h-[2527px] relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div>
                <div className="flex flex-col items-start p-[21px] sm:p-5 z-[1] bg-black-900">
                  <Heading as="h2" className="ml-[65px] tracking-[0.38px] text-center">
                    OUR ACTIVITY
                  </Heading>
                  <div className="flex flex-col items-end w-[92%] md:w-full ml-[147px]">
                    <div className="self-stretch h-[3px] w-full bg-red-700 rounded-[1px]" />
                    <div className="h-[3px] w-[32%] mt-[-3px] bg-yellow-800 rounded-[1px]" />
                  </div>
                  <Text size="3xl" as="p" className="flex self-center mt-[23px] tracking-[0.38px] text-center">
                    <span className="text-white-A700">Previous </span>
                    <span className="text-red-700">Events</span>
                  </Text>
                  <MacBookAirOneRowFive className="flex items-center w-[37%] md:w-full mt-[68px] mb-[310px] ml-[183px]" />
                </div>
                <div className="flex flex-col mt-[-613px]">
                  <Img src="images/img_group_86.png" alt="image" className="w-[6%] ml-[130px] z-[1] object-cover" />
                  <div className="flex flex-col items-start mt-[-289px] pl-[102px] pr-14 gap-[53px] py-[102px] md:p-5 bg-black-900">
                    <MacBookAirOneRowSix className="flex items-center w-[38%] md:w-full ml-[103px]" />
                    <div className="flex justify-center w-[63%] md:w-full mb-[203px] ml-[329px] p-[19px]">
                      <Text size="3xl" as="p" className="mt-[7px] !text-red-700 tracking-[0.38px] text-center">
                        Upcomming Events
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-[-5px] pl-14 pr-[111px] py-[111px] md:p-5 bg-black-900">
                <div className="h-[301px] w-[36%] mt-[212px] mb-[109px] bg-black-900 backdrop-opacity-[0.5] blur-[4.00px]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[41%] gap-[45px] bottom-[1%] right-[8%] p-[47px] m-auto md:p-5 bg-blue_gray-900_01 absolute rounded-[25px]">
              <div className="flex justify-center w-[89%] md:w-full mt-[668px]">
                <Heading size="s" as="h3" className="tracking-[0.38px] text-center">
                  Shark Tank MGIT is an entrepreneurial event at MGIT, featuring aspiring student innovators pitching
                  their ideas to a panel of judges. It fosters creativity, collaboration, and entrepreneurship,
                  providing a platform for students to showcase their startups and win support for their ventures.
                </Heading>
              </div>
              <div className="flex justify-center w-[66%] md:w-full">
                <Button color="red_700" size="lg" shape="round" className="w-full sm:px-5 font-semibold">
                  Register Now
                </Button>
              </div>
            </div>
            <MacBookAirOneRowSeven className="flex items-center w-[36%] left-[16%] top-[23%] m-auto absolute" />
            <div className="flex flex-col items-center justify-end w-[43%] gap-[45px] bottom-[1%] left-[10%] p-[47px] m-auto md:p-5 bg-blue_gray-900_01 absolute rounded-[25px]">
              <div className="flex justify-center w-[89%] md:w-full mt-[668px]">
                <Heading size="s" as="h4" className="tracking-[0.38px] text-center">
                  Shark Tank MGIT is an entrepreneurial event at MGIT, featuring aspiring student innovators pitching
                  their ideas to a panel of judges. It fosters creativity, collaboration, and entrepreneurship,
                  providing a platform for students to showcase their startups and win support for their ventures.
                </Heading>
              </div>
              <div className="flex justify-center w-[66%] md:w-full">
                <Button color="red_700" size="lg" shape="round" className="w-full sm:px-5 font-semibold">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[4210px] relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="z-[1]">
                <div className="z-[1]">
                  <div className="flex p-14 md:p-5 z-[1] bg-black-900">
                    <div className="flex flex-col w-[89%] mb-[650px] ml-[87px] gap-[15px]">
                      <Heading as="h2" className="tracking-[0.38px] text-center !font-extrabold">
                        GALLERY
                      </Heading>
                      <div className="h-[5px] ml-3 bg-red-700 relative rounded-sm">
                        <div style={{ width: "32%" }} className="h-full bg-yellow-800 absolute rounded-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-[-652px]">
                    <div className="w-[42%] md:w-full mr-[124px] z-[1]">
                      <div className="flex flex-col items-center gap-[9px] p-[38px] sm:p-5 bg-black-900 backdrop-opacity-[0.5] blur-[4.00px]">
                        <Heading size="lg" as="h3" className="mt-[11px] tracking-[0.38px] text-center">
                          27th December 2023
                        </Heading>
                        <Text size="3xl" as="p" className="flex mb-[559px] tracking-[0.38px] text-center">
                          <span className="text-white-A700">SYNAPSE’23 </span>
                          <span className="text-red-700">Day 1</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch items-end mt-[-112px] pl-14 pr-[157px] gap-[23px] py-[157px] md:p-5 bg-black-900">
                      <div className="flex justify-end w-[35%] md:w-full mr-[310px]">
                        <Button color="red_700" size="sm" shape="round" className="w-full sm:px-5 font-semibold">
                          EXPLORE &gt;
                        </Button>
                      </div>
                      <Heading size="3xl" as="h4" className="flex mb-[376px] mr-[303px] tracking-[0.38px] text-center">
                        <span className="text-white-A700">OUR </span>
                        <span className="text-red-700">Team</span>
                        <span className="text-white-A700">&nbsp;</span>
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="mt-[-490px]">
                  <div className="flex flex-col z-[1]">
                    <MacBookAirOneColumn content="EXECUTIVE TEAM " className="w-[42%] md:w-full ml-[153px] z-[1]" />
                    <div className="flex mt-[-61px] pl-[61px] pr-14 py-[61px] md:p-5 bg-black-900">
                      <div className="flex w-[47%] mb-[376px] ml-[69px]">
                        <Text as="p" className="tracking-[0.38px] text-center">
                          Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                          research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head.
                          Since then it runs with motivation to develop roots of entrepreneurship and innovation in
                          students through nurturing skills like finding and solving real world problem, creative
                          thinking, networking, management.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-[-444px]">
                    <div className="flex md:flex-col w-[78%] md:w-full gap-[59px] z-[1]">
                      <MacBookAirOneColumn content="EXECUTIVE TEAM " className="flex flex-col w-full mt-[7px]" />
                      <MacBookAirOneColumn content="EXECUTIVE TEAM " className="flex flex-col w-full mb-[7px]" />
                    </div>
                    <div className="flex self-stretch justify-end mt-[-104px] pl-14 pr-[97px] py-[97px] md:p-5 bg-black-900">
                      <div className="flex flex-col w-[93%] mb-[180px] mr-[3px] gap-[33px]">
                        <div className="flex flex-col gap-[21px]">
                          <div className="flex md:flex-col gap-[13px]">
                            <div className="w-full mt-[7px]">
                              <Text as="p" className="tracking-[0.38px] text-center">
                                Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                                research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto
                                head. Since then it runs with motivation to develop roots of entrepreneurship and
                                innovation in students through nurturing skills like finding and solving real world
                                problem, creative thinking, networking, management.
                              </Text>
                            </div>
                            <div className="w-full">
                              <Text as="p" className="tracking-[0.38px] text-center">
                                Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                                research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto
                                head. Since then it runs with motivation to develop roots of entrepreneurship and
                                innovation in students through nurturing skills like finding and solving real world
                                problem, creative thinking, networking, management.
                              </Text>
                            </div>
                          </div>
                          <a href="#" className="ml-10">
                            <Heading as="h5" className="tracking-[0.38px] text-center !font-extrabold">
                              CONTACT US
                            </Heading>
                          </a>
                        </div>
                        <div className="flex flex-col items-end w-[92%] md:w-full ml-[19px]">
                          <div className="self-stretch h-[2px] w-full bg-red-700 rounded-[1px]" />
                          <div className="h-[2px] w-[32%] mt-[-2px] bg-yellow-800 rounded-[1px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-[-231px]">
                <div className="flex md:flex-col justify-between items-start w-[81%] md:w-full gap-5 z-[1]">
                  <Img
                    src="images/img_image_2.png"
                    alt="imagetwo_one"
                    className="w-[45%] md:w-full mt-[15px] object-cover rounded-[29px]"
                  />
                  <div className="flex flex-col w-[49%] md:w-full gap-[27px] p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex justify-center w-[89%] md:w-full ml-[11px] p-4">
                      <Text size="3xl" as="p" className="flex tracking-[0.38px] text-center">
                        <span className="text-white-A700">Wanna Reach </span>
                        <span className="text-red-700">OUt? </span>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center gap-[33px]">
                      <Input shape="round" type="text" name="name" placeholder="Name*" className="sm:pr-5" />
                      <Input shape="round" type="email" name="email" placeholder="Email ID*" className="sm:pr-5" />
                      <TextArea
                        shape="round"
                        name="message"
                        placeholder="Message*"
                        className="self-stretch sm:pr-5 sm:py-5 text-white-A700_7f tracking-[0.38px] font-medium"
                      />
                      <div className="flex justify-center w-[33%] md:w-full">
                        <Button
                          color="blue_gray_900_01"
                          size="sm"
                          shape="round"
                          className="w-full sm:px-5 font-semibold"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[844px] mt-[-389px] bg-black-900" />
              </div>
            </div>
            <div className="w-[44%] left-[11%] top-[5%] m-auto absolute">
              <div className="flex flex-col items-center justify-end p-[34px] sm:p-5 bg-black-900 backdrop-opacity-[0.5] blur-[4.00px]">
                <Text size="3xl" as="p" className="flex mt-[596px] tracking-[0.38px] text-center">
                  <span className="text-white-A700">Certificate </span>
                  <span className="text-red-700">Distribution</span>
                </Text>
                <Heading size="lg" as="h6" className="tracking-[0.38px] text-center">
                  11th March 2024
                </Heading>
              </div>
            </div>
            <div className="flex flex-col w-[44%] right-[8%] top-[28%] m-auto absolute">
              <MacBookAirOneColumn content="EXECUTIVE TEAM " className="w-[92%] md:w-full ml-[9px]" />
              <div>
                <Text as="p" className="tracking-[0.38px] text-center">
                  Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and research
                  amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head. Since then it
                  runs with motivation to develop roots of entrepreneurship and innovation in students through nurturing
                  skills like finding and solving real world problem, creative thinking, networking, management.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-end items-start mt-[15px] gap-[35px] p-[11px] bg-black-900">
            <Text size="lg" as="p" className="flex mt-[18px] tracking-[0.38px] text-center">
              <span className="text-white-A700">Copyright smthgsmthg | IDEA INCUBATOR MGIT | </span>
              <span className="text-red-700">All Rights Reserved</span>
            </Text>
            <div className="flex justify-center w-[8%] md:w-full mb-[779px] mr-[150px] p-[7px] rotate-[90deg] bg-blue_gray-900_01 shadow-xs rounded-[11px]">
              <Img src="images/img_vector.svg" alt="vector_one" className="self-start h-[24px] mb-[3px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
