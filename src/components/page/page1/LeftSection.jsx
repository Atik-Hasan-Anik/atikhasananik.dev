import React from "react";
import RoundedBtn from "../../comon button/RoundedBtn";
import SemiroundedBtn from "../../comon button/SemiroundedBtn";
import HeroText from "./HeroText";
import ParaText from "./ParaText";
import Dot from "../../comon button/Dot";
import StarSvgAnimation from "../../background/StarSvgAnimation";

import svg from "../../../assets/iconImage/headerIcon.png";
import svg1 from "../../../assets/iconImage/headerIcon1.png";

const LeftSection = () => {
  const svgAnimation = [
    {
      img: svg,
      height: 10,
      duration: 0.3,
      delay: 0.1,
      rotate: "5deg",
      scale: 1.05,
    },
    {
      img: svg1,
      height: 12,
      duration: 0.4,
      delay: 0.1,
      rotate: "-12deg",
      scale: 0.95,
    },
    {
      img: svg,
      height: 8,
      duration: 0.3,
      delay: 0.2,
      rotate: "18deg",
      scale: 1.12,
    },
    {
      img: svg1,
      height: 15,
      duration: 0.4,
      delay: 0.1,
      rotate: "-5deg",
      scale: 0.88,
    },
    {
      img: svg,
      height: 11,
      duration: 0.3,
      delay: 0.15,
      rotate: "25deg",
      scale: 1.2,
    },
    {
      img: svg1,
      height: 14,
      duration: 0.35,
      delay: 0.1,
      rotate: "-20deg",
      scale: 1.02,
    },
    {
      img: svg,
      height: 9,
      duration: 0.25,
      delay: 0.05,
      rotate: "45deg",
      scale: 0.75,
    },
    {
      img: svg1,
      height: 17,
      duration: 0.45,
      delay: 0.2,
      rotate: "-35deg",
      scale: 1.35,
    },
   
  
  ];
  return (
    <div className="relative sm:w-full max-sm:pt-10   lg:w-[50%] pt-20 h-full inline-block">
      <RoundedBtn
        text="Wellcome to my Universe"
        Dot={<Dot color="#3970B1" h="9px" />}
      />

      <div className=" relative md:text-[3rem] lg:text-[4.2rem] font-[750] text-white md:leading-12 lg:leading-18 md:mt-6 lg:mt-8">
        <div className="absolute max-lg:hidden top-0 right-0 ">
          <SemiroundedBtn
            btnConfi="Clean Code"
            bgColor="#04162F"
            color="#51a2ff"
            fontSize="14px"
            borderColor="#51a2ff"
          />
        </div>

        <HeroText txt1="Hello" txt2="I'm" txt3="Atik Hasan Anik" />

        { /* here is svg svgAnimation  */ }

        <div className="absolute max-sm:w-15 md:w-[10%] lg:w-[30%] h-[45%] top-[5%] gap-1 ">
          <StarSvgAnimation img={svg} img1={svg1} />

        </div>
      </div>

      <div className="flex gap-5 items-center max-sm:mt-3 mt-8">
        <SemiroundedBtn
          btnConfi="Self Learner && Problem Solver "
          bgColor="#04162F"
          color="#51a2ff"
          fontSize="20px"
          borderColor="#51a2ff"
          py="14px"
          smsize="12px"
        />
      <span className="max-sm:hidden">
          <SemiroundedBtn
          btnConfi="Clean Architecture"
          bgColor="#081532"
          color="#fcbb00"
          fontSize="14px"
          borderColor="#fcbb00"
        />
      </span>
      </div>

      <ParaText />

      <div className="flex max-sm:flex-col max-sm:gap-2 items-center gap-8 max-sm:mt-5 mt-10  ">
        <span className="hovering max-sm:w-full rounded-xl cursor-pointer ">
          <SemiroundedBtn
            btnConfi="Visit Github "
            bgColor="#101828"
            color="#fff"
            fontSize="18px"
            borderColor="#00D1C3"
          />
        </span>
        <span className="hovering max-sm:w-full  rounded-xl cursor-pointer">
          <SemiroundedBtn
            btnConfi="Download Resume"
            bgColor="#101828"
            color="#fff"
            fontSize="16px"
            borderColor=""
          />
        </span>
      </div>
    </div>
  );
};

export default LeftSection;
