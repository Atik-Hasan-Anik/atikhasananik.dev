import React from "react";

const RoundedBtn = (props) => {
  return (
    <div
      style={{ width: props.w }}
      className="text-[#d1d1d1] px-3 py-2 text-[14px] font-bold outline-0 bg-[#11192C] rounded-full border-[#395086] border flex  items-center gap-2 "
    >
      <span>{props.Dot}</span>
      {props.text}
    </div>
  );
};

export default RoundedBtn;
