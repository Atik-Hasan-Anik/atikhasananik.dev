import React from "react";

const SemiroundedBtn = (props) => {
  
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        fontSize: props.fontSize,
        borderColor: props.borderColor,
      }}
      className="text-[#d1d1d1] px-4 py-2 min-h-7.5 max-h-12.5 font-medium outline-0 rounded-xl border-[#395086] border flex items-center gap-2 justify-center "
    >
    {props.btnConfi}
    </div>
  );
};

export default SemiroundedBtn;
