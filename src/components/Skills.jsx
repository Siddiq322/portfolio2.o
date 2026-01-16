import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'

function SkillBall({ position, skill }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.5
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="skyblue" />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.12}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </mesh>
  )
}

function Skills() {
  const skillGroups = [
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
      position: [-2, 0, 2] // Top-left
    },
    {
      category: 'Cybersecurity',
      skills: ['Kali Linux', 'Maltego'],
      position: [2, 0, 2] // Top-right
    },
    {
      category: 'Data Analytics',
      skills: ['Python', 'SQL'],
      position: [-2, 0, -2] // Bottom-left
    },
    {
      category: 'Tools & Platforms',
      skills: ['Figma', 'GitHub', 'VS Code', 'Lovable'],
      position: [2, 0, -2] // Bottom-right
    }
  ]

  return (
    <section id="skills" className="h-screen relative pb-20">
      <Canvas camera={{ position: [0, 0, 8] }} className="pointer-events-none" gl={{ alpha: true, clearColor: 'black' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        {skillGroups.map((group, groupIndex) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </Canvas>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h2 className="text-4xl font-bold">My Skills</h2>
      </div>
    </section>
  )
}

function SkillGroup({ group }) {
  return (
    <group position={group.position}>
      {/* Category Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial 
          color="#4A90E2" 
          transparent 
          opacity={0.15} 
          wireframe={true}
        />
        <Text
          position={[0, 0, 2.3]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {group.category}
        </Text>
      </mesh>
      
      {/* Skill Spheres inside the category sphere */}
      {group.skills.map((skill, index) => {
        const angle = (index / group.skills.length) * Math.PI * 2
        const radius = 1.2 // Inside the category sphere
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 0.5 // Add some vertical variation
        return (
          <SkillBall
            key={skill}
            position={[x, y, z]}
            skill={skill}
          />
        )
      })}
    </group>
  )
}

export default Skills