import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import emailjs from '@emailjs/browser'

function Earth() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4A90E2" />
    </mesh>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your EmailJS service details
    emailjs.sendForm('service_a6uygv4', 'template_z9jfg8i', e.target, '3_WV2mf7XXPxHqnRk')
      .then((result) => {
        console.log(result.text)
        alert('Message sent successfully!')
      }, (error) => {
        console.log(error.text)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center pointer-events-auto py-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <Canvas camera={{ position: [0, 0, 3] }} className="h-96">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <Earth />
          </Canvas>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-white"
        >
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="mb-8 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> siddiqshaik613@gmail.com</p>
                <p><strong>Phone:</strong> +91 9951532862</p>
                <p><strong>Location:</strong> India</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Siddiq322" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a>
                <a href="https://www.linkedin.com/in/shaik-siddiq-917483370/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-800 text-white rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact