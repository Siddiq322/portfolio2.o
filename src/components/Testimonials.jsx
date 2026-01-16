import React from 'react'
import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Corp',
      message: 'Amazing work! The 3D portfolio really stands out and showcases skills beautifully.'
    },
    {
      name: 'Jane Smith',
      role: 'Designer, Creative Agency',
      message: 'Incredible attention to detail and smooth animations. Highly recommended!'
    },
    {
      name: 'Mike Johnson',
      role: 'Developer, Startup Inc',
      message: 'The interactive elements and modern design make this portfolio unforgettable.'
    }
  ]

  return (
    <section id="testimonials" className="h-screen flex items-center justify-center pointer-events-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.message}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials