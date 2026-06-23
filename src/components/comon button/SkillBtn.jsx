import React from 'react'

const SkillBtn = (props) => {
  console.log(props.icon)
  return (
    <div className=' flex gap-1 items-center hover:bg-[#273E4D] transition-all duration-350 hover:text-white justify-center px-3.5 py-2 text-xs text-[#9a9a9a] font-bold rounded-full border hover:scale-[1.05] border-gray-600 bg-[#182236] '>
      <img className='h-4.5 w-4.5' src={props.icon} alt="" />
      <p>{props.iconName }</p>
    </div>
  )
}

export default SkillBtn
