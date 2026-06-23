import React from "react";
import HeroText from "../page1/HeroText";
import SkillsCard from "./SkillsCard";

const Page2 = () => {
  const skills = [
    
    {
      sklilName: "Frontend Development",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Backend Development",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "UI/UX Design",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Cloud & DevOps",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Tools & Technologies",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Others",
      skillIcon: "",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },
  ];

  return (
    <section className=" w-full ">
      <div className="text-center mt-20 text-[3rem] font-bold text-[#f8c555]  leading-15 border-b border-b-gray-600  ">
        <HeroText txt1="Technology" txt2="&" txt3="Skills" />
      </div>
      <div className="grid grid-cols-3 self-center justify-self-center gap-5 mt-8 ">
        {skills.map((elem ,idx) => {
          return <SkillsCard id = {idx} cardHeading={elem.sklilName} />;
        })}
      </div>
    </section>
  );
};

export default Page2;
