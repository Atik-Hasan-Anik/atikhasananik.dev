import React from "react";
import SkillBtn from "../../comon button/SkillBtn";

const SkillsCard = (props) => {

  return (
    <div id={`${props.id}`} className="h-55 w-110 hovering  rounded-2xl border border-gray-600 p-7 bg-[#0E1527] ">
      <div className="flex items-center gap-4">
        <div className="text-2xl bg-[#2a76c3] px-4 py-4 h-10 w-10 scile rounded flex items-center justify-center ">o</div>
        <h2 className="text-3xl font-bold text-white  ">
          {props.cardHeading}
        </h2>
      </div>
      <div className="pt-5  flex gap-2  flex-wrap">
        <SkillBtn />
        <SkillBtn />
        <SkillBtn />
        <SkillBtn />
        <SkillBtn />
      </div>
    </div>
  );
};

export default SkillsCard;
