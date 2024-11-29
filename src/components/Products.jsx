import React from 'react'
import Cards from './Cards'

const Products = () => {
  return (
    <>
      <div className='w-full  flex flex-wrap justify-center gap-8 p-8'>
      <h2 className='flex justify-center text-center font-dance font-extrabold text-[40px] m-1 w-[100vw] h-[50px] text-white '>
        Trending Products of the week
      </h2>
        <Cards image={'/public/src_pic/lavender.webp'} text={'Lavender'} price={200} />
        <Cards image={'/public/src_pic/lemon.jpg'} text={'Lemon'} price={250} />
        <Cards image={'/public/src_pic/mint.webp'} text={'Mint'} price={190} />
        <Cards image={'/public/src_pic/rose.webp'} text={'Rose'} price={300} />
        <Cards image={'/public/src_pic/diffuser.webp'} text={'Mustard oil'} price={170} />
        <Cards image={'/public/src_pic/diffuser2.webp'} text={'Herbal flavour'} price={210} />
        <Cards image={'/public/src_pic/vanilla.jpg'} text={'Vanilla'} price={380} />
        <Cards image={'/public/src_pic/Luar.jpg'} text={'Luar'} price={210} />
      </div>
    </>
  )
}

export default Products
