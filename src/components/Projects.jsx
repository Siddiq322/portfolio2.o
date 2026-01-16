import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

function RotatingProjects() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.2 // Slow rotation
  })

  const radius = 6
  const projects = [
    {
      title: 'ChatFlow - Real-Time Chat Application',
      description: 'A full-stack real-time chat application with modern UI/UX, featuring instant messaging, online status tracking, and message management. Built with a complete authentication system, Socket.IO for real-time communication, and cloud deployment on Render and Vercel.',
      technologies: 'React, TypeScript, Tailwind CSS, Express.js, Socket.IO, MongoDB, Mongoose, JWT, Cloudinary, Shadcn UI',
      features: [
        'Real-time 1-to-1 messaging with Socket.IO',
        'User authentication with JWT tokens',
        'Chat request system for connecting with new users',
        'Message deletion with real-time sync',
        'Read receipts (sent/delivered/seen status)',
        'Unread message count badges',
        'Online/offline status indicators',
        'Typing indicators',
        'Image/GIF/Sticker support with Cloudinary integration',
        'Responsive design for mobile and desktop'
      ],
      liveUrl: 'https://real-chat-flow10.vercel.app',
      githubUrl: 'https://github.com/Siddiq322/chat-frontend-spark'
    },
    {
      title: 'SkillSwap – Peer-to-Peer Skill Exchange Platform',
      description: 'SkillSwap is a Google-powered peer-to-peer learning platform that enables students to exchange skills with each other instead of paying money. Users create structured profiles showcasing skills they can teach and skills they want to learn, get intelligently matched with peers, communicate securely, and schedule live learning sessions.',
      technologies: 'React + Vite, Firebase Authentication, Cloud Firestore, Firebase Hosting, Google Calendar API, Google Meet, Dialogflow AI, Looker Studio',
      liveUrl: 'https://skillswap-eta-lovat.vercel.app/',
      githubUrl: null
    },
    {
      title: 'SecureGuard – Role-Based Cybersecurity Awareness Platform',
      description: 'SecureGuard is a web-based cybersecurity awareness and detection platform designed to demonstrate secure authentication, role-based access control, and common security analysis workflows. The application supports User and Admin roles with features like password strength analysis and suspicious URL submission.',
      technologies: 'React, Firebase Authentication, Google OAuth 2.0, Firestore, TypeScript, Tailwind CSS, Render',
      features: [
        'Role-based access control (User/Admin)',
        'Password strength analysis',
        'Suspicious URL submission system',
        'Malware input detection',
        'Admin review and update system',
        'Domain-restricted authentication',
        'Secure data storage with Firestore'
      ],
      liveUrl: 'https://secureguard-6idy.onrender.com/',
      githubUrl: null
    }
  ]

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <Html key={index} position={[x, 0, z]} center transform occlude>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              <p className="text-sm text-gray-400 mb-2"><strong>Technologies:</strong> {project.technologies}</p>
              {project.features && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-400 mb-1">Key Features:</p>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex space-x-4 mt-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">Live Demo</a>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
                )}
              </div>
            </div>
          </Html>
        )
      })}
    </group>
  )
}

function Projects() {
  return (
    <section id="projects" className="h-screen relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 2, 10] }} className="pointer-events-none absolute inset-0" style={{ height: '100%', width: '100%' }} gl={{ alpha: true, clearColor: 'black' }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
        <RotatingProjects />
      </Canvas>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-auto">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-lg mt-2">Drag to rotate and explore</p>
      </div>
    </section>
  )
}

export default Projects