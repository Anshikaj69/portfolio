"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motions'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-[9rem] w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon 
                className='text-[#b49bff] mr-[10px] h-5 w-5'>
                </SparklesIcon>
                <h1 className='Welcome-text text-[13px] '>MERN Stack Developer Portfolio</h1>
            </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-row md:gap-6 gap-3 mt-6 text-6xl  font-semibold text-white max-w-[1200px] w-auto h-auto flex-wrap'>
            Hey, I am 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Anshika</span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
            Committed full-stack developer, passionate about crafting practical and effective digital solutions using cutting-edge technologies.
            Providing the best Project Experience
        </motion.p>

        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        href='https://drive.google.com/file/d/1HPIbqw4mG06cBPs94dgBSoE6tCuARDLV/view?usp=sharing'
        target='_blank'>
            Download CV
        </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full none md:flex justify-center items-center '>
            <Image
            src='/mainIconsdark.svg'
            alt='work icons'
            width={550}
            height={550} />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent