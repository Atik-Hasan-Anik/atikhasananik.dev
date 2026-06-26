import React from 'react'


const HeroText = (props) => {
  
  return (
    <div>
       
        <h1 className="tracking-wide max-sm:text-[2rem] max-sm:leading-9 md:text-5xl lg:text-[4rem] max-sm:mt-5  ">{props.txt1} <br />
         {props.txt2} <span  className="text-[#3DC9AD]  ">{props.txt3}</span>
        </h1>
        
    </div>
  )
}

export default HeroText
