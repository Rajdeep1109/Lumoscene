import React from 'react'

const TextCard = ({head, body}) => {
  return (
    <div className='h-[350px] w-[300px] m-7 flex flex-col font-dance rounded-xl shadow-xl bg-[#e7c0a8]'>
        <h2 className='font-dance text-center text-[38px] font-black text-green-950 m-1'>{head}</h2>
        <p className='font-dance text-center font-semibold text-[21px] text-green-950 m-2'>{body}</p>
    </div>
  )
}

export default TextCard