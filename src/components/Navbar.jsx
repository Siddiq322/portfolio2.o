import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close menu after clicking
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
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
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
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:text-blue-400 transition-colors block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-blue-400 transition-colors block"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-white hover:text-blue-400 transition-colors block"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-white hover:text-blue-400 transition-colors block"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-blue-400 transition-colors block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar