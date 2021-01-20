import React from 'react'
import home1 from '../img/home1.png'
import * as S from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation } from '../animation'
import { Wave } from './Wave'

export const AboutSection = () => {
  return (
    <S.About>
      <S.Description>
        <motion.div className='title'>
          <S.Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </S.Hide>
          <motion.p variants={fade}>
            Contact us for any photogrophy or videoshooting ideas you have. You
            will be in good hands
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </S.Description>
      <S.Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='man with a camera'
        />
      </S.Image>
      <Wave />
    </S.About>
  )
}
