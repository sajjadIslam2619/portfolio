import React, { useState } from 'react'
import './About.css'
import profileImage from '../../images/sajjad-dp.jpg'

function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-image-container">
          {!imageError ? (
            <img
              src={profileImage}
              alt="Profile"
              className="about-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="about-image-placeholder">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
        <h1 className="about-title">Hi, I'm Sajjad</h1>
        <p className="about-subtitle">Researcher | Software Engineer</p>
        {/* <p className="about-description">
          I create beautiful and functional web applications
        </p> */}
        <div className="about-content">
          <p className="about-text">
            I am a software engineer and applied researcher who enjoys building intelligent, user centered applications.
            I work with artificial intelligence, machine learning, and modern web technologies to create reliable, practical solutions.
            My journey has taken me from software engineering to applied AI research, where I now focus on
            mental health, healthcare, and data driven problem solving.
          </p>
          <p className="about-text">
            I love exploring new ideas, learning new tools, and turning complex challenges into systems people can actually use.
            I also enjoy mentoring students, experimenting with emerging AI models, and contributing to projects that create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

