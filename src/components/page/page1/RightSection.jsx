import React from "react";
import "../../../../src/index.css";
import RightHeader from "./RightHeader";
import Profilejs from "./Profilejs";
const RightSection = () => {
  return (
    <section
      style={{
        width: "50%",
        background: "#091121",
        padding: "20px",
        borderRadius: "16px",
        border: "2px solid #50B4D8",
        overflow: "hidden",
      }} className="overflow-hidden"
    >
      <RightHeader />
      <Profilejs />
    </section>
  );
};

export default RightSection;
