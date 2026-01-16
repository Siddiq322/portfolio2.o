import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
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
    <section id="projects" className="h-screen relative overflow-hidden flex items-center justify-center bg-black py-20">
      <div className="text-center max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
          className="text-4xl font-bold text-white mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{project.description.substring(0, 100)}...</p>
                <p className="text-xs text-gray-400 mb-2"><strong>Tech:</strong> {project.technologies.substring(0, 50)}...</p>
                {project.features && (
                  <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex space-x-2 mt-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">Live Demo</a>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects