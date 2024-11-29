import React from 'react';

const Bundle = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col my-4 mx-6 font-dance justify-center bg-gradient-to-tl from-[#fefaf6] to-[#f8ede3] rounded-lg drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] items-center gap-4 h-[300px] w-[300px] border-2 border-[#f3dcc0] hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex justify-center items-center h-[180px] w-[180px] rounded-lg bg-white shadow-md">
        <img src={image} className="h-[210] w-[210] object-cover shadow-lg rounded-md" alt={name} />
      </div>
      <p className="text-[#25330f] font-black text-[21px] text-center">{name}</p>
      <p className="text-[#264d26] font-bold text-[18px] text-center px-4">{desc}</p>
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] overflow-hidden text-green-950 font-dance font-black text-[21px] bg-white transition duration-300 ease-out border-2 hover:border-green-950 border-white rounded-full shadow-lg group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-950 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-green-950 transition-all duration-300 transform group-hover:translate-x-full ease">
          Check Details →
        </span>
        <span className="relative">Check Details →</span>
      </a>
    </div>
  );
};

export default Bundle;
