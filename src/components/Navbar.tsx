'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        const navbarPosition = navbar.getBoundingClientRect().top
        setIsFixed(navbarPosition <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      id="navbar"
      className={`bg-white shadow-md transition-all duration-300 ${
        isFixed ? 'fixed top-0 left-0 right-0 z-50' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-primary">
              Pool Service
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-gray-600 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-600 hover:text-primary transition-colors">
              Contato
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#servicos" 
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#depoimentos" 
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contato" 
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 