import React from 'react'
import HeroContent from '../sub/HeroContent'

const hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='absolute rotate-180 top-[-340px] left-0 z-0 w-full h-full object-cover'>
            <source src={'/blackhole.webm'} type='video/webm'></source>
        </video>
        <HeroContent/>
    </div>
  )
}

export default hero
