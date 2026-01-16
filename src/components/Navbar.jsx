import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar