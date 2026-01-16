import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pointer-events-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="text-left space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p className="text-lg">Currently pursuing B.Tech 2nd year at Siddhartha Academy of Higher Education</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p className="text-lg">
              Passionate technology enthusiast, deeply interested in web development, cybersecurity, and data analytics. Believes in learning by doing and has been actively working on various projects to strengthen skills. Goal is to leverage technology to create impactful solutions that make a difference in people's lives.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Interests</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li><strong>Web Development:</strong> Building modern web applications</li>
              <li><strong>Cybersecurity:</strong> Security analysis and penetration testing</li>
              <li><strong>Data Analytics:</strong> Transforming data into insights</li>
              <li><strong>Learning:</strong> Continuously expanding knowledge</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About