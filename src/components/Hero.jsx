import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const RotatingCube = () => {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, 'https://i.postimg.cc/N0VLy2Gb/my-image.jpg')

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.3
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

function Hero() {
  return (
    <section id="hero" className="h-screen relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }} className="pointer-events-none absolute inset-0" style={{ height: '100%', width: '100%' }} gl={{ clearColor: 'black' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Stars />
        <Suspense fallback={null}>
          <RotatingCube />
        </Suspense>
      </Canvas>
      <div className="absolute top-20 left-10 text-white pointer-events-none z-10 max-w-lg">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Shaik Abubakar Siddiq
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Full Stack Developer, Cybersecurity Enthusiast & Data Analyst
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-300 mb-12"
        >
          Explore my projects, skills, and experience in web development, cybersecurity, and data analytics.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <p className="text-center">Scroll down to explore</p>
        <div className="animate-bounce mt-2">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero