import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities for collaboration.
          </p>
          <div className="contact-links">
            <a href="mailto:s.i.sajjad.islam@gmail.com" className="contact-link">
              Email
            </a>
            <a href="https://github.com/sajjadIslam2619" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sajjad-islam-mu/" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

