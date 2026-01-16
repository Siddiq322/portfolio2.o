import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'

function RotatingCube() {
  const meshRef = useRef()
  const texture = useTexture('https://i.postimg.cc/zfCPMQXx/my-image.jpg')

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5
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
      <Canvas camera={{ position: [0, 0, 5] }} className="pointer-events-none absolute inset-0" style={{ height: '100%', width: '100%' }} gl={{ alpha: true, clearColor: 'black' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Stars />
        <RotatingCube />
      </Canvas>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white pointer-events-none text-center">
        <motion.h1
          initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="text-5xl font-bold mb-2"
        >
          Shaik Abubakar Siddiq
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl"
        >
          Welcome to my Portfolio
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <p className="text-center">Scroll down to explore</p>
        <div className="animate-bounce mt-2">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero