import React from "react";
import HeroText from "../page1/HeroText";
import SkillsCard from "./SkillsCard";

const Page2 = () => {
  const skills = [
    {
      sklilName: "Frontend Development",
      skillIcon: "",
    },
    {
      sklilName: "Backend Development",
      skillIcon: "",
    },
    {
      sklilName: "UI/UX Design",
      skillIcon: "",
    },
    {
      sklilName: "Cloud & DevOps",
      skillIcon: "",
    },
    {
      sklilName: "Tools & Technologies",
      skillIcon: "",
    },
    {
      sklilName: "Others",
      skillIcon: "",
    },
  ];
  return (
    <section className=" w-full ">
      <div className="text-center mt-20 text-[3rem] font-bold text-[#f8c555]  leading-15 border-b border-b-gray-600  ">
        <HeroText txt1="Technology" txt2="&" txt3="Skills" />
      </div>
      <div className="grid grid-cols-3 self-center justify-self-center gap-5 mt-8 ">
        {skills.map((elem) => {
          return <SkillsCard cardHeading={elem.sklilName} />;
        })}
      </div>
    </section>
  );
};

export default Page2;
