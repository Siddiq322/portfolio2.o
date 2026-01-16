import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ amount: 0.5 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Shaik Abubakar Siddiq. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/Siddiq322" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/shaik-siddiq-917483370/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer