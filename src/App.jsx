
import React from 'react'
import "./index.css"
import LeftSection from './components/page/page1/LeftSection'
import Navber from './components/navber/Navber'
import Page1 from './components/page/page1/Page1'
import Page2 from './components/page/page2/Page2'


const App = () => {
  return (
    <main className='relative'>
      <Navber/>
      <Page1/>
      <Page2/>
    </main>
  )
}

export default App
