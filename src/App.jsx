import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import LeftSection from "./components/page/page1/LeftSection";
import Navber from "./components/navber/Navber";
import Page1 from "./components/page/page1/Page1";
import Page2 from "./components/page/page2/Page2";
import Background from "./components/background/Background";

const App = () => {
  const myRef = useRef(null);

  const [height, setheight] = useState(null);
  const [width, setwidth] = useState(null);

  useEffect(() => {
    if (myRef.current) {
      const currentWidth = myRef.current.offsetWidth;
      const currentHeight = myRef.current.offsetHeight;

      setheight(currentHeight);
      setwidth(currentWidth);
    }
  }, []);

  const arr = [];

  for (let i = 0; i < (height/45) *( width/45); i++) {
    arr.push(i);
  }
  

  return (
    <main ref={myRef} className="relative">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px `,
          height: `${height}px`,
          gridTemplateColumns: `repeat(${Math.floor(width / 45)},1fr)`,
          gridTemplateRows: `repeat(${Math.floor(height / 45)},1fr)`,
        }}
        className=" border-0 outline-0 grid gap-0 gap-x-0 gap-y-0 absolute top-0 left-0 -z-50 "
      >
        {arr.map((elem,idx) => {
          return <Background elem={idx}/>
        }
        )}
      </div>
      <Navber />
      <Page1 />
      <Page2 />
    </main>
  );
};

export default App;
