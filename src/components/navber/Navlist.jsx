import React from "react";

const Navlist = (props) => {
  
  return (
    <>
        <li className="flex items-center justify-center px-4 py-2 active:scale-[1.05] in-focus: hover:bg-[#273E4D] transition-all duration-300 rounded-full gap-1.25"><img className="h-4 invert-90" src={`${props.elem.src}`} alt="" /> <p className=" text-[14px] font-2xl  text-[#fff]" href="" >{props.elem.listName}</p> </li>
    </>
  );
};

export default Navlist;
