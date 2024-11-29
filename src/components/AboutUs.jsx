import React from 'react'
import TextCard from './TextCard'

const AboutUs = () => {
  return (
    <div className="w-full h-[69vh] my-[38px] flex justify-evenly shadow-md inset-shadow-sm align-middle items-center bg-[url('src_pic/beige2.jpg')] bg-cover">
        <h2 className='font-dance text-center text-[38px] font-black text-green-950 m-1'>Why Us?</h2>
        <TextCard head={'Eco-Friendly'} body={"Every single pieace of our products are made from natural ingredients without chemicals and preservatives. The packaging is done using recycled materials that contribute to enoviroment cleanliness"}/>
        <TextCard head={'Hand crafted'} body={"Our candles and diyas are exclusively hand made to give the taste of uniqueness. Empowering villagers with skills all the way"}/>
        <TextCard head={'Aromas for every mood.'} body={"Festive? Romantic? Realxing? We got it all covered. From candles and diffuers to bundles, we got all set for every occasions."}/>
    </div>
  )
}

export default AboutUs