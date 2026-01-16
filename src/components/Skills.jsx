import React from 'react'
import { motion } from 'framer-motion'

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
    <section id="skills" className="h-screen relative overflow-hidden flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
          className="text-4xl font-bold text-white mb-8"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{group.category}</h3>
              <ul className="text-sm text-gray-300 list-decimal list-inside space-y-1">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills