import React from "react";
import "../../../../src/index.css";
import RightHeader from "./RightHeader";
import Profilejs from "./Profilejs";
const RightSection = () => {
  return (
    <section
      style={{
        
        background: "#091121",
        padding: "20px",
        borderRadius: "16px",
        border: "2px solid #50B4D8",
        
      }} className="relative overflow-hidden  flex-col md:w-full lg:w-[50%]"
    >
      <RightHeader />
      <Profilejs />
    </section>
  );
};

export default RightSection;
