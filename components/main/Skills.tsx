"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft, slideInFromRight} from '@/utils/motions'
import { motion } from 'framer-motion'
import StackIcon from "tech-stack-icons";
import Image from 'next/image';

const Skills = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col justify-center items-center mt-[7rem]"
      id='skills'>
      <div className="text-center p-1 text-4xl font-medium md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Tools and Technologies
      </div>


      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {/* Box 1: Languages */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="glass-container row-span-2 grid grid-rows-subgrid  rounded-lg bg-[#030014] z-20 p-4 md:col-span-1 shadow-xl  shadow-[#2A0E61]/50"
        >
          <h3 className="text-2xl text-white pl-2 mt-3">Languages</h3>
          <div className="max-w-md text-balance mx-2 mb-3 text-slate-300 bg-[#2A0E61]/20 px-3 py-[2rem] rounded-lg  " >
            <ul className='flex flex-row flex-wrap gap-12 align-center justify-center'>
              <li><StackIcon name="js" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="java" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="html5" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="css3" className='w-[40px] h-[40px]' /></li>
            </ul>
          </div>
        </motion.div>

        {/* Box 2: Frontend Frameworks and Libraries */}
        <motion.div
          variants={slideInFromRight(1)}
          className="glass-container row-span-2 grid grid-rows-subgrid rounded-lg bg-[#030014] z-20 p-4 md:col-span-2 shadow-xl  shadow-[#2A0E61]/50"
        >
          <h3 className="text-2xl text-white pl-7 mt-3">Frontend Frameworks and Libraries</h3>
          <div className="max-w-md text-balance ml-7 mb-3 text-slate-300 bg-[#2A0E61]/20 px-8 py-[2rem] rounded-lg align-middle flex flex-row gap-12">
            <div className='flex flex-row flex-wrap gap-8'>
              <StackIcon name="reactjs" className='w-[40px] h-[40px]' />
              <StackIcon name="redux" className='w-[40px] h-[40px]' />
              <StackIcon name="nextjs" className='w-[40px] h-[40px] bg-white' />
              <StackIcon name="typescript" className='w-[40px] h-[40px]' />
              <StackIcon name="tailwindcss" className='w-[40px] h-[40px]' />
              <StackIcon name="bootstrap5" className='w-[40px] h-[40px]' />
              <StackIcon name="materialui" className='w-[40px] h-[40px]' />
              <StackIcon name="framer" className='w-[40px] h-[40px] bg-white' />
              <StackIcon name="threejs" className='w-[40px] h-[40px] bg-white' />
            </div>
          </div>
        </motion.div>

        {/* Box 3: Backend Technologies */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="glass-container row-span-3 grid grid-rows-subgrid gap-1 rounded-lg bg-[#030014] z-20 p-4 md:col-span-2 shadow-xl  shadow-[#2A0E61]/50"
        >
          <h3 className="text-2xl text-white pl-7 mt-3">Backend Technologies and Frameworks</h3>
          <ul className="max-w-md text-balance ml-7  text-slate-300 bg-[#2A0E61]/20 px-3 py-[2rem] rounded-lg flex flex-row justify-evenly">
            <div className='flex flex-row flex-wrap gap-8 p-3 '>
              <StackIcon name="nodejs" className='w-[40px] h-[40px]' />
              <div >
                <Image src='/expressjs.png' alt='express.js' width={120} height={0} className='bg-white' /></div>
              <StackIcon name="mongodb" className='w-[40px] h-[40px] bg-white' />
              <StackIcon name="mysql" className='w-[40px] h-[40px]' />
              <div>
                <Image src='/webhook.svg' alt='webhook' width={40} height={40} className='bg-white' /></div>
              <div>
                <Image src='/Socket.io.svg' alt='webhook' width={40} height={40} className='bg-white' /></div>
                <div>
                <Image src='/jwt.svg' alt='jwt' width={80} height={50} className='bg-white' /></div>
              
            </div>
          </ul>
        </motion.div>

        {/* Box 4: Development Tools and Platforms */}
        <motion.div
          variants={slideInFromRight(1.1)}
          className="glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-[#030014] z-20 p-4 md:col-span-1 shadow-xl  shadow-[#2A0E61]/50"
        >
          <h3 className="text-2xl text-white pl-2 mt-3">Development Tools and Platforms</h3>
          <div className="max-w-md text-balance mx-2  text-slate-300  bg-[#2A0E61]/20 px-3 py-[2rem] rounded-lg flex flex-row justify-evenly">
            <ul className='flex flex-row flex-wrap gap-8 px-2 py-2 items-center justify-center'>
              <li><StackIcon name="supabase" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="git" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="firebase" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="postman" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="wordpress" className='w-[40px] h-[40px]' /></li>
              <li><StackIcon name="canva" className='w-[40px] h-[40px]' /></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>

  );
};

export default Skills;
