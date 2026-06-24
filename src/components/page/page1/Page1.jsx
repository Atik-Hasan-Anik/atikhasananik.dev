import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Page1 = () => {
  return (
    <section className='w-full sm:flex-col max-sm:p-4 p-8  lg:flex-row max-sm:flex
    max-sm:flex-col gap-10 justify-between    '>
     <LeftSection/>
     <RightSection/>
    </section>
  )
}

export default Page1
