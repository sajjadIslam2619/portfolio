import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      degree: 'PhD in Computer Science',
      period: '2022 - Present',
      university: 'Marquette University',
      location: 'Milwaukee, WI, USA',
      link: 'https://www.marquette.edu/'
    },
    {
      degree: 'BS in Computer Science',
      period: '2011-2015',
      university: 'Shahjalal University of Science and Technology',
      location: 'Sylhet, Bangladesh',
      link: 'https://www.sust.edu/'
    }

  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <p className="university-name">
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="university-link">
                      {edu.university}
                    </a>
                  ) : (
                    edu.university
                  )}
                </p>
                <p className="education-location">{edu.location}</p>
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

