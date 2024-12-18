"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'About us', number: '01' },
    { title: 'Our work', number: '02' },
    { title: 'Services', number: '03' },
    { title: 'Blog', number: '04' },
    { title: 'Contact us', number: '05' },
  ];

  const socialLinks = [
    { title: 'Instagram', url: '#' },
    { title: 'LinkedIn', url: '#' },
    { title: 'X/Twitter', url: '#' },
    { title: 'Awwwards', url: '#' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    //@ts-expect-error STFU
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-row">
            <div className="nav-logo-row">
              <a href="/" className="website-link is--alt">
                {/* NOTE: ADD LOGO LATER */}
              </a>
            </div>
            <div className="nav-row__right">
              <button className="menu-button" onClick={toggleMenu}>
                <div className="menu-button-text">
                  {!isOpen && <motion.p
                    initial={{ y: 0 }}
                    animate={{ y: isOpen ? '-100%' : 0 }}
                  >
                    Menu
                  </motion.p>}
                  {isOpen && <motion.p
                    initial={{ y: 0 }}
                    animate={{ y: isOpen ? '-100%' : 0 }}
                  >
                    Close
                  </motion.p>}
                </div>
                <motion.div 
                  className="menu-button-icon"
                  animate={{ rotate: isOpen ? 315 : 0 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                    <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                    <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                    <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                    <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                    <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="nav"
            initial={{ display: 'none' }}
            animate={{ display: 'block' }}
            exit={{ display: 'none' }}
          >
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '120%' }}
            >
              <div className="menu-bg">
                <motion.div
                  className="bg-panel first"
                  initial={{ x: '101%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0 }}
                />
                <motion.div
                  className="bg-panel second"
                  initial={{ x: '101%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.12 }}
                />
                <motion.div
                  className="bg-panel"
                  initial={{ x: '101%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.24 }}
                />
              </div>

              <div className="menu-inner">
                <ul className="menu-list">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.number}
                      className="menu-list-item"
                      initial={{ y: '140%', rotate: 10 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.50 + (index * 0.05) }}
                    >
                      <a href="#" className="menu-link">
                        <span className="eyebrow">{item.number}</span>
                        <span className="menu-link-heading">{item.title}</span>
                        <div className="menu-link-bg" />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="menu-details"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <p className="p-small">Socials</p>
                  <div className="socials-row">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.title}
                        href={link.url}
                        className="p-large text-link"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;