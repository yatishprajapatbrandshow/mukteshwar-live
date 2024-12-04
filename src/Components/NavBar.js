"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`z-[100] w-full py-4 fixed transition-all ${
        scrolled ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <h3 className={`font-bold text-2xl sm:text-3xl italic ${
              scrolled ? 'text-white' : 'text-black'
            }`}>
              Mukteshwar
            </h3>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <nav>
              <div className='flex space-x-4'>
                {['Home'].map((item) => (
                  <Link
                    key={item}
                    href={`/#`}
                    className={`text-base font-medium hover:text-blue-500/80 transition-colors ${
                      scrolled ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className='hidden md:flex items-center space-x-2'>
            <Phone className={scrolled ? 'text-white' : 'text-black'} size={20} />
            <span className={`text-base font-mono ${
              scrolled ? 'text-white' : 'text-black'
            }`}>
              +91 888-554-1451
            </span>
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className={`p-2 ${scrolled ? 'text-white' : 'text-black'}`}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden mt-4'>
            <nav className='flex flex-col space-y-4'>
              {['Home', 'Demos', 'Properties', 'About', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`text-base font-medium hover:text-blue-500/80 transition-colors ${
                    scrolled ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className='mt-4 flex items-center space-x-2'>
              <Phone className={scrolled ? 'text-white' : 'text-black'} size={20} />
              <span className={`text-base font-mono ${
                scrolled ? 'text-white' : 'text-black'
              }`}>
                +91 888-554-1451
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;

