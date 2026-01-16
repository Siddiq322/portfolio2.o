import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

const RotatingSkills = () => {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.15 // Slow rotation
  })

  const radius = 6
  const skillGroups = [
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      category: 'Cybersecurity',
      skills: ['Kali Linux', 'Maltego']
    },
    {
      category: 'Data Analytics',
      skills: ['Python', 'SQL']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Figma', 'GitHub', 'VS Code', 'Lovable']
    }
  ]

  return (
    <group ref={groupRef}>
      {skillGroups.map((group, index) => {
        const angle = (index / skillGroups.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <Html key={index} position={[x, 0, z]} center>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white w-48 h-64 overflow-hidden flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-center">{group.category}</h3>
              <ul className="text-sm text-gray-300 list-decimal list-inside space-y-1">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </Html>
        )
      })}
    </group>
  )
}

function Skills() {
  return (
    <section id="skills" className="h-screen relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 2, 10] }} className="pointer-events-none absolute inset-0" style={{ height: '100%', width: '100%' }} gl={{ clearColor: 'black' }}>
        <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={20} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
        <RotatingSkills />
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-auto z-10"
      >
        <h2 className="text-4xl font-bold">My Skills</h2>
        <p className="text-lg mt-2">Drag to rotate, scroll to zoom in/out</p>
      </motion.div>
    </section>
  )
}

export default Skills