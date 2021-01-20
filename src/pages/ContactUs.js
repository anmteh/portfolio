import React from 'react'
//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <h1>Our CONTACT</h1>
    </motion.div>
  )
}
