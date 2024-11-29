import React from 'react'
import Bundle from './Bundle'; // Assuming Bundle is in the same directory

const Shop = () => {
  return (
    <>
      <div className="w-[95vw] flex flex-wrap bg-[url('src_pic/mintbg.jpg')] bg-cover rounded-3xl drop-shadow-lg justify-center gap-8 p-8">
        <h2 className='flex justify-center text-center font-dance font-black text-[40px] m-1 w-full text-green-800 px-4'>
          Bundles of the Week
        </h2>
        
        <Bundle image={'/src_pic/candle.png'} name={'Bundle'} desc={'Ready made collection of candles and diffusers.'} />
        <Bundle image={'/src_pic/festive.webp'} name={'Festive Collection 🎄'} desc={'Make your crib festive in this festival season'} />
        <Bundle image={'/src_pic/honeymoon.jpg'} name={'Honeymoon Heaven 💕🕯'} desc={'A steamy combo of seductive scents for setting the mood. '} />
        <Bundle image={'/src_pic/serene.webp'} name={'Serene Sanctuary 🪷'} desc={'Lavender, rose, chamomile. Perfect for relaxation.'} />
        <Bundle image={'/src_pic/gift.jpg'} name={'Gifting Bundles 🎁'} desc={'Pre-curated sets to gift for every occasion.'} />
        <Bundle image={'/src_pic/bundleset.webp'} name={'Custom set 🛒'} desc={'Treate yourself with a custom set of your choices.'} />
      </div>
    </>
  )
}

export default Shop;
