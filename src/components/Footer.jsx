import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Shaik Abubakar Siddiq. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/Siddiq322" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/shaik-siddiq-917483370/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer