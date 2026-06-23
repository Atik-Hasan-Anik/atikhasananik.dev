import React from "react";
import RoundedBtn from "../../comon button/RoundedBtn";
import SemiroundedBtn from "../../comon button/SemiroundedBtn";
import HeroText from "./HeroText";
import ParaText from "./ParaText";
import Dot from "../../comon button/Dot";

const LeftSection = () => {
  const objet = {};
  return (
    <div className=" w-[48vw]  pt-20 h-full inline-block">
      <RoundedBtn
        w="30vh"
        text="Wellcome to my Universe"
        Dot={<Dot color="#3970B1" h="9px" />}
      />

      <div className=" relative text-[4.2rem] font-[750] text-white leading-18 mt-8">
        <div className="absolute top-0 right-0 ">
          <SemiroundedBtn
            btnConfi="Clean Code"
            bgColor="#04162F"
            color="#51a2ff"
            fontSize="14px"
            borderColor="#51a2ff"
          />
        </div>

        <HeroText txt1="Hello" txt2="I'm" txt3="Atik Hasan Anik" />
      </div>
      <div className="flex gap-5 items-center mt-8">
        <SemiroundedBtn
          btnConfi="Self Learner && Problem Solver "
          bgColor="#04162F"
          color="#51a2ff"
          fontSize="20px"
          borderColor="#51a2ff"
          py="14px"
        />
        <SemiroundedBtn
          btnConfi="Clean Architecture"
          bgColor="#081532"
          color="#fcbb00"
          fontSize="14px"
          borderColor="#fcbb00"
        />
      </div>

      <ParaText />

      <div className="flex items-center gap-8 mt-10 ">
        <span className="hovering rounded-xl cursor-pointer ">
          <SemiroundedBtn
            btnConfi="Visit Github "
            bgColor="#101828"
            color="#fff"
            fontSize="18px"
            borderColor="#00D1C3"
          />
        </span>
        <span className="hovering rounded-xl cursor-pointer">
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
