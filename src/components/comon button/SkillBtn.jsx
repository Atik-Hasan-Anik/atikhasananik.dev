import React from 'react'

const SkillBtn = (props) => {
  
  return (
    <div className=' hover flex gap-1 items-center hover:bg-[#273E4D] transition-all duration-350 hover:text-white justify-center px-3.5 py-2 text-xs text-[#9a9a9a] font-bold rounded-full border hover:scale-[1.05] border-gray-600 bg-[#182236] '>

      <img className='h-4.5 w-4.5 max-sm:h-4 max-sm:w-4 expand transition-all ' src={props.icon} alt="" />

      <p className='max-sm:text-[10px]'>{props.iconName }</p>
    </div>
  )
}

export default SkillBtn
