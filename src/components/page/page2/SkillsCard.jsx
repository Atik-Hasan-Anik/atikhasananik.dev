import React from "react";
import SkillBtn from "../../comon button/SkillBtn";

const SkillsCard = (props) => {
  
  return (
    <div
      id={`${props.id}`}
      className="h-55 w-110 hovering  rounded-2xl border border-gray-600 p-7 bg-[#0E1527] "
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl bg-[#161F30] px-2 py-2  scile transition-all duration-300 rounded-xl flex items-center justify-center ">

          <img className="h-8 w-8 font-bold text-7xl" src={props.skillIcon} alt="icon" />

        </div>

        <h2 className="text-3xl font-bold text-white  ">{props.cardHeading}</h2>

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
