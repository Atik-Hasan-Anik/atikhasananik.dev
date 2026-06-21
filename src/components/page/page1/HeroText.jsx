import React from 'react'

const HeroText = (props) => {
  return (
    <>
       
        <h1 className="tracking-wide">{props.txt1} <br />
         {props.txt2} <span  className="text-[#3DC9AD]  ">{props.txt3}</span>
        </h1>
    </>
  )
}

export default HeroText
