import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

function RotatingSkills() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.15 // Slow rotation
  })

  const radius = 8
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
          <Html key={index} position={[x, 0, z]} center transform occlude>
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
    <section id="skills" className="h-screen relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 2, 12] }} className="pointer-events-none absolute inset-0" style={{ height: '100%', width: '100%' }} gl={{ alpha: true, clearColor: 'black' }}>
        <OrbitControls enableZoom={true} enablePan={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
        <RotatingSkills />
      </Canvas>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-auto">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <p className="text-lg mt-2">Drag to rotate, scroll to zoom in/out</p>
      </div>
    </section>
  )
}

export default Skills