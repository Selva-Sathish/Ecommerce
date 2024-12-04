import React, { useEffect, useState } from 'react'

import Banner1 from './banner1.png';
import Banner2 from './banner2.png';

import ArrowIcon from './Icons/arrow';
import Forward from './Icons/Forward';
export default function Banner() {
  
  const bannersImage = [Banner1, Banner2]

  return (
    <div className='w-[98%] mx-auto mt-4 '>
        <div className='relative'>
          <div className='absolute flex h-1/2 w-[2rem] bg-white top-10 rounded-tr-[5px] rounded-br-[5px] items-center'> 
             <ArrowIcon /> 
          </div>
          <div className='flex overflow-hidden'>
            {bannersImage.map((value, index) => (
              <img src={value} key={index} />
            ))}
          </div>
          <div className='absolute right-0 flex h-1/2 w-[2rem] bg-white top-10 rounded-tl-[5px] rounded-bl-[5px] items-center'> 
             <Forward /> 
          </div>
        </div>
    </div>
  )
}
