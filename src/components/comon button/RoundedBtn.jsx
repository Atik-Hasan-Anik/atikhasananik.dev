import React from "react";

const RoundedBtn = (props) => {
  return (
    <div
      style={{ width: props.w }}
      className="text-[#d1d1d1] max-sm:justify-center max-sm:text-[12px] px-3 max-sm:px-2  py-2 md:text-[14px] font-bold outline-0 bg-[#11192C] rounded-full border-[#395086] border flex  items-center gap-2 "
    >
      <span>{props.Dot}</span>
      {props.text}
    </div>
  );
};

export default RoundedBtn;
