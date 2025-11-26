import React, { useState, useEffect } from 'react'
import './Header.css'
import logoImage from '../../images/sajjad-logo.png'

function Header() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'experience', 'education', 'projects', 'activities', 'publications', 'photography', 'contact']

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'publications', label: 'Publications' },
    { id: 'photography', label: 'Photography' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <img src={logoImage} alt="Sajjad Logo" className="logo-image" />
          </div>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                {index > 0 && <li className="nav-separator">|</li>}
                <li>
                  <a
                    href={`#${link.id}`}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

