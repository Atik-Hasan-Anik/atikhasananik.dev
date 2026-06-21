import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Page1 = () => {
  return (
    <section className='w-full p-8 h-screen flex gap-10 justify-between  '>
     <LeftSection/>
     <RightSection/>
    </section>
  )
}

export default Page1
