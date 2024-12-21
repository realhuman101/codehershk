import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './css/MiniNav.module.css'

interface NavItem {
  label: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: 'Love + Money', sectionId: 'love-money' },
  { label: 'Work', sectionId: 'work' },
  { label: 'ToolKit™', sectionId: 'toolkit' },
  { label: 'Agency', sectionId: 'agency' },
  { label: 'Contact', sectionId: 'contact' }
]

export const NavBar = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.getElementById(item.sectionId)
      )

      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setSelected(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (index: number, sectionId: string) => {
    setSelected(index)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <button
          key={item.label}
          className={styles.navItem}
          onClick={() => handleClick(index, item.sectionId)}
        >
          {selected === index && (
            <motion.div
              className={styles.background}
              layoutId="background"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35
              }}
            />
          )}
          {item.label}
        </button>
      ))}
    </nav>
  )
}
