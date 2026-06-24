import React from 'react'


const HeroText = (props) => {
  
  return (
    <div>
       
        <h1 className="tracking-wide max-sm:text-4xl md:text-5xl max-sm:mt-5 max-sm:leading-12 ">{props.txt1} <br />
         {props.txt2} <span  className="text-[#3DC9AD]  ">{props.txt3}</span>
        </h1>
        
    </div>
  )
}

export default HeroText
