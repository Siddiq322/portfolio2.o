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
    <section id="hero" className="h-screen relative flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }} className="pointer-events-none absolute inset-0" gl={{ alpha: true, clearColor: 'black' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Stars />
        <RotatingCube />
      </Canvas>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white pointer-events-none text-center">
        <h1 className="text-5xl font-bold mb-2">Shaik Abubakar Siddiq</h1>
        <p className="text-xl">Welcome to my Portfolio</p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <p className="text-center">Scroll down to explore</p>
        <div className="animate-bounce mt-2">↓</div>
      </div>
    </section>
  )
}

export default Hero