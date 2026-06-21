import React from 'react'
import Dot from '../../comon button/Dot'

const RightHeader = () => {
  return (
    <div className=' flex gap-4 items-center px-5 w-[120%] -translate-5 h-15 bg-[#092034] border-[#50B4D8] border-2 border-b-transparent '>
      <div className='flex gap-2 items-center '>
        <Dot h="13px" color="#FB2C36" />
      <Dot h="13px" color="#F0B100" />
      <Dot h="13px" color="#00C950" />
      </div>
      <p className='text-[#909090] font-medium text-[14px]'>profile.js</p>
      
    </div>
  )
}

export default RightHeader
