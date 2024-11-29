import React from 'react';

const Herosection = () => {
  return (
    <>
      <div className='w-full h-[100vh] '>
        <nav className='flex w-full bg-[#dbd2c3] justify-end gap-[69px] h-[75px] items-center font-dance font-semibold text-white text-[28px] list-none px-7'>
          <img src='../src_pic/logo.png' className='absolute left-[19px] h-[75px]'/>
          <li className='relative group'>
            <span className='cursor-pointer group-hover:text-white transition-all duration-300'>Home</span>
            <div className='absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
          </li>
          <li className='relative group'>
            <span className='cursor-pointer group-hover:text-white transition-all duration-300'>About Us</span>
            <div className='absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
          </li>
          <li className='relative group'>
            <span className='cursor-pointer group-hover:text-white transition-all duration-300'>Our Products</span>
            <div className='absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
          </li>
          <li className='relative group'>
            <span className='cursor-pointer group-hover:text-white transition-all duration-300'>Contact Us</span>
            <div className='absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
          </li>
        </nav>
        <div className='flex items-center'>
        <div className='flex flex-col p-7 align-middle w-[400px] my-[100px] mx-[19px]'>
        <h2 className='flex justify-center text-[40px] font-dance font-extrabold text-white'>Lumoscene</h2>
        <p className='text-[27px] flex justify-center text-center font-dance font-light m-[4px] text-white'>Calm your mind with our collection of natural scents and aromas of candles and diffusers. One scent at a time, for the ultimate relaxation of the mind</p>
        <button className="shadow-[inset_0_0_0_2px_#133621]  text-white my-4 px-4 py-4 rounded-full tracking-widest font-dance font-bold text-[27px] bg-transparent hover:bg-slate-50 hover:text-green-900  transition duration-200">
        Explore
      </button>
        </div>
        <img
          src='../src_pic/Lumoscene.png'
          className='h-auto w-[1000px] absolute right-0 rounded-l-xl drop-shadow-[0_0px_10px_#c8facbba]'
        />
        </div>
      </div>
    </>
  );
};

export default Herosection;
