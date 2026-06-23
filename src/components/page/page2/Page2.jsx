import React from "react";
import HeroText from "../page1/HeroText";
import SkillsCard from "./SkillsCard";

const Page2 = () => {
  const skills = [
    
    {
      sklilName: "Frontend Development",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzUwQTJGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUteG1sLWljb24gbHVjaWRlLWNvZGUteG1sIj48cGF0aCBkPSJtMTggMTYgNC00LTQtNCIvPjxwYXRoIGQ9Im02IDgtNCA0IDQgNCIvPjxwYXRoIGQ9Im0xNC41IDQtNSAxNiIvPjwvc3ZnPg==",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Backend Development",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA1REY3MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRhdGFiYXNlLWljb24gbHVjaWRlLWRhdGFiYXNlIj48ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiLz48cGF0aCBkPSJNMyA1VjE5QTkgMyAwIDAgMCAyMSAxOVY1Ii8+PHBhdGggZD0iTTMgMTJBOSAzIDAgMCAwIDIxIDEyIi8+PC9zdmc+",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "UI/UX Design",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MyN0FGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhbmVscy10b3AtbGVmdC1pY29uIGx1Y2lkZS1wYW5lbHMtdG9wLWxlZnQiPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJNMyA5aDE4Ii8+PHBhdGggZD0iTTkgMjFWOSIvPjwvc3ZnPg==",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Cloud & DevOps",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGODkwNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsb3VkLWljb24gbHVjaWRlLWNsb3VkIj48cGF0aCBkPSJNMTcuNSAxOUg5YTcgNyAwIDEgMSA2LjcxLTloMS43OWE0LjUgNC41IDAgMSAxIDAgOVoiLz48L3N2Zz4=",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Tools & Technologies",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZCNjRCNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNwdS1pY29uIGx1Y2lkZS1jcHUiPjxwYXRoIGQ9Ik0xMiAyMHYyIi8+PHBhdGggZD0iTTEyIDJ2MiIvPjxwYXRoIGQ9Ik0xNyAyMHYyIi8+PHBhdGggZD0iTTE3IDJ2MiIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJNMiAxN2gyIi8+PHBhdGggZD0iTTIgN2gyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJNMjAgMTdoMiIvPjxwYXRoIGQ9Ik0yMCA3aDIiLz48cGF0aCBkPSJNNyAyMHYyIi8+PHBhdGggZD0iTTcgMnYyIi8+PHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIvPjxyZWN0IHg9IjgiIHk9IjgiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIxIi8+PC9zdmc+",
      iconDts: [
        {
          icon: "",
          iconName: "",
        },
      ],
    },

    {
      sklilName: "Others",
      skillIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZEQzcwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxheW91dC1kYXNoYm9hcmQtaWNvbiBsdWNpZGUtbGF5b3V0LWRhc2hib2FyZCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iOSIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIxNCIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI5IiB4PSIxNCIgeT0iMTIiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNSIgeD0iMyIgeT0iMTYiIHJ4PSIxIi8+PC9zdmc+",
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
          return <SkillsCard skillIcon={elem.skillIcon} id = {idx} cardHeading={elem.sklilName} />;
        })}
      </div>
    </section>
  );
};

export default Page2;
