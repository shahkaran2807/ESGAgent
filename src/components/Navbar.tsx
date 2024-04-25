import React from 'react'

const Navbar = () => (
  <nav className="bg-slate-300 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-8" src="/img/esgerlogo.webp" alt="Logo" />
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
