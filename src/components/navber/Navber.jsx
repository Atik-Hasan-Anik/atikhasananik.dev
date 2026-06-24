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
    <nav className="fixed left-[50%] sm:mt-0 translate-x-[-50%] flex md:justify-center z-20 items-center  py-1.5 w-full md:w-[80%] lg:w-[52vw] xl:w-[42vw] sm:rounded-none mx-auto md:mt-4   bg-[#11263af9] md:rounded-full border-[#00ffffdc] border-2  ">
      

      <ul className="flex  w-full justify-between sm:items-center sm:gap-12  md:gap-3  ">

        <li className="text-xl ml-4 font-bold text-white md:hidden">Protfolio</li>
        <li className="md:hidden pr-4" ><img className="invert-100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUtaWNvbiBsdWNpZGUtbWVudSI+PHBhdGggZD0iTTQgNWgxNiIvPjxwYXRoIGQ9Ik00IDEyaDE2Ii8+PHBhdGggZD0iTTQgMTloMTYiLz48L3N2Zz4=" alt="" /></li>
        {navlistConfig.map((elem) => {
          return <Navlist elem={elem} />;
        })}
      </ul>
    </nav>
  );
};

export default Navber;
