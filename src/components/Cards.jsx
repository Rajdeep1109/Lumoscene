import React from 'react';

const Cards = ({ image, text, price }) => {
  return (
    <div className="flex flex-col my-4 mx-6 font-dance justify-center bg-gradient-to-tl from-[#fefaf6] to-[#f8ede3] rounded-lg drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] items-center gap-4 h-[300px] w-[220px] border-2 border-[#f3dcc0] hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex justify-center items-center h-[180px] w-[180px] rounded-lg bg-white shadow-md">
        <img src={image} className="h-full w-full object-cover shadow-lg rounded-md" alt="Product" />
      </div>
      <p className="text-[#25330f] font-black text-[30px] text-lg font-dance ">{text}</p>
      <p className="text-[#264d26] font-extrabold text-[21px] font-dance">₹ {price}</p>
  <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] overflow-hidden  text-green-950 font-dance font-black text-[21px] bg-white transition duration-300 ease-out border-2 hover:border-green-950 border-white rounded-full shadow-lg group">
     <span class="absolute inset-0 flex items-center justify-center w-full h-full  text-white duration-300 -translate-x-full bg-green-950 group-hover:translate-x-0 ease">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span class="absolute flex items-center justify-center w-full h-full text-green-950 transition-all duration-300 transform group-hover:translate-x-full ease">Add to Cart →</span>
     <span class="relative invisible">Add to Cart →</span>
 </a>
    </div>
  );
};

export default Cards;
