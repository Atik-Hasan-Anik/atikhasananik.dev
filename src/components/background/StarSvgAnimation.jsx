import React from "react"

const StarSvgAnimation = (props) => {
  
  return (
    <div
      style={{ top: props.top, left: props.top * 8 }}
      className="relative w-full h-full max-sm:w-[50%] max-sm:h-[50%] "
    >
      <img id="svgImg" style={{ animationDelay:`${.9}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-3 h-3 w-3 " src={props.img} alt="" />
      <img
       id="svgImg" style={{ animationDelay:`${.3}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-5 left-4  h-4 w-4"
        src={props.img1}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.7}s`}} className="absolute bottom-0 left-7  h-2 w-2"
        src={props.img1}
        alt=""
      />
      <img id="svgImg" style={{ animationDelay:`${.4}s`}} className="absolute max-sm:w-2 max-sm:h-2 top-3 left-10  h-4 w-4" src={props.img} alt="" />
      <img
      id="svgImg" style={{ animationDelay:`${.3}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-3 left-9  h-5 w-5"
        src={props.img1}
        alt=""
      />
      <img id="svgImg" style={{ animationDelay:`${.2}s`}} className="absolute max-sm:w-2 max-sm:h-2 top-0  right-0 h-4 w-4" src={props.img} alt="" />
      <img
       id="svgImg" style={{ animationDelay:`${.8}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-5 left-20   h-3 w-3"
        src={props.img}
        alt=""
      />
      <img
      id="svgImg" style={{ animationDelay:`${.3}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-9 left-25   h-5 w-5"
        src={props.img1}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.5}s`}} className="absolute max-sm:w-2 max-sm:h-2 top-10 right-3  h-4 w-4"
        src={props.img1}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.1}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-5 left-30   h-3 w-3"
        src={props.img}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.4}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-2 left-23   h-2 w-2"
        src={props.img}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.3}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-8 left-38   h-4 w-4"
        src={props.img1}
        alt=""
      />
      <img
       id="svgImg" style={{ animationDelay:`${.5}s`}} className="absolute max-sm:w-2 max-sm:h-2 bottom-1 left-34   h-4 w-4"
        src={props.img1}
        alt=""
      />
    </div>
  );
};

export default StarSvgAnimation;
