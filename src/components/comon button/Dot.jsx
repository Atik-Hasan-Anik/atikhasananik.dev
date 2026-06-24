import React from 'react'

const Dot = (props) => {
  return (
    <div id="svgImg" style={{height:props.h,width:props.h,backgroundColor:props.color,
      animationDelay:props.delay,
      
    }} className='rounded-full transition-all'>
      
    </div>
  )
}

export default Dot
