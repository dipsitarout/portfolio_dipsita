import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FolderOpen, Mail, Award, Star, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Active section detection
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLogo = (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-extrabold tracking-tight">
      DR
    </span>
  );

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, id: 'projects' },
    { name: 'Skills', href: '#skills', icon: Star, id: 'skills' },
    { name: 'Achievements', href: '#achievements', icon: Award, id: 'achievements' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black ${
        scrolled
          ? 'shadow-lg bg-opacity-95 border-b border-[#393953]/60 backdrop-blur-md'
          : 'bg-transparent'
      } transition-all duration-400`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center text-3xl select-none hover:scale-105 transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            aria-label="Dipsita Rout Home"
          >
            {navLogo}
            <span className="ml-3 hidden sm:inline text-lg font-semibold text-white tracking-wider">
              Dipsita Rout
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-center gap-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative group flex items-center gap-x-2 px-5 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-300 bg-[#1a1d29] shadow-lg shadow-cyan-500/20' 
                        : 'text-gray-300 hover:text-cyan-300'
                    }`}
                  >
                    <Icon className={`w-4 h-4 duration-200 ${
                      isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'
                    }`} />
                    <span>{item.name}</span>
                    <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'w-3/4 -translate-x-1/2' 
                        : 'w-0 group-hover:w-3/4 group-hover:-translate-x-1/2'
                    }`}></span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-[#161b22] text-gray-400 hover:text-cyan-300 transition-all duration-150"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-black bg-opacity-98 backdrop-blur border-t border-[#393953]">
          <div className="flex flex-col px-3 pt-3 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-x-3 px-4 py-3 rounded-md text-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-400 bg-[#23243b] border-l-4 border-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-[#23243b]'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : ''}`} />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Gradient Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
    </nav>
  );
};

export default Navbar;