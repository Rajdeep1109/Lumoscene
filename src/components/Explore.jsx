import React from 'react'

const Explore = () => {
  return (
    <>
      <div className="w-[95vw] h-[100vh] items-center justify- drop-shadow-lg flex bg-[url('../src_pic/beige.jpg')] bg-cover rounded-r-[38px]">
        <img src='src_pic/bg1.webp' className=" rounded-r-[38px] w-[1000px] h-[600px]  drop-shadow-[0_0px_10px_#000000]"/>
        <div className="flex flex-col text-center justify-center mx-[60px] w-[500px]">
          <h3 className="font-dance text-[#2e2f1d] text-[38px] font-black">
            About Us
          </h3>
          <p className="font-dance my-[19px] mx-[57px] text-[#2d2e23] text-[21px] font-bold">
          Transform your space into a serene haven with our handcrafted scented candles and diffusers. Infused with calming fragrances like lavender and rose, each piece is designed to relax your senses and elevate your home. Discover eco-friendly creations that bring tranquility, one scent at a time.
          </p>
          <button className="shadow-[inset_0_0_0_2px_#272d1c]  text-#684a4a my-4 px-4 py-4 rounded-full tracking-widest font-dance font-bold text-[27px] bg-transparent hover:bg-slate-50 hover:text-red-950  transition duration-200">
        Trending Products
      </button>
        </div>
      </div>
    </>
  )
}

export default Explore
