import React from "react";
import Navlist from "./Navlist";
import img from "../../assets/iconImage/svgviewer-png-output (6).png";
import img1 from "../../assets/iconImage/svgviewer-png-output (1).png";
import img2 from "../../assets/iconImage/svgviewer-png-output (2).png";
import img3 from "../../assets/iconImage/svgviewer-png-output (3).png";
import img4 from "../../assets/iconImage/svgviewer-png-output (4).png";


const Navber = () => {
  const navlistConfig = [
    {
      listName: "Home",
      src: img,
    },
    {
      listName: "Skills",
      src: img1,
    },
    {
      listName: "Experience",
      src: img2,
    },
    {
      listName: "Exducation",
      src: img3,
    },
    {
      listName: "Project",
      src: img4,
    },
  ];

 
  return (
    <nav className="fixed left-[50%] translate-x-[-50%] flex justify-center z-20 items-center  py-1.5 min-w-[42vw] mx-auto mt-4   bg-[#11263af9] rounded-full border-[aqua] border-2  ">
      

      <ul className="flex gap-3 ">
        {navlistConfig.map((elem) => {
          return <Navlist elem={elem} />;
        })}
      </ul>
    </nav>
  );
};

export default Navber;
