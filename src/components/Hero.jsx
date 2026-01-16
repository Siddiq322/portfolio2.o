import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" className="h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Shaik Abubakar Siddiq
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Full Stack Developer & Cybersecurity Enthusiast
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Welcome to my Portfolio - Explore my projects, skills, and experience in web development and cybersecurity.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <p className="text-lg mb-2">Scroll down to explore</p>
        <div className="animate-bounce">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero