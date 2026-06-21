import React from "react";
import SkillBtn from "../../comon button/SkillBtn";

const SkillsCard = (props) => {
 
  return (
    <div className="h-55 w-110 rounded-2xl border border-gray-600 p-7 bg-[#0E1527] ">
      <div className="flex items-center gap-4">
        <span className="text-2xl bg-amber-200 p-4 rounded ">i</span>
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
