import React from 'react'
import {motion} from 'framer-motion'
const Hero = ({onGetStarted}) => {
  return (
    <div
    className='hero'
    >
     <motion.h1>Welcome to FitPulse</motion.h1> 
     <motion.p>Your journey to a healthier life starts here.</motion.p>
     <motion.button
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     animate={{
      delay:2
     }}
     className='get-started2'
     onClick={onGetStarted}
     >Get started</motion.button>
    </div>
  )
}

export default Hero
