import React from 'react'
import Herosection from './components/Herosection'
import Explore from './components/Explore'
import Products from './components/Products'
import Shop from './components/Shop'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <div className="flex max-w-full overflow-x-hidden flex-col items-center w-screen  bg-[url('../src_pic/green3.jpeg')] bg-cover">
    <Herosection/>
    <div className='flex w-screen justify-start'>
      <Explore/>
    </div>
    <Products/>
    <Shop/>
    <AboutUs/>
    <Contact/>
    </div>
    </>
  )
}

export default App