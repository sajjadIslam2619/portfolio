import React from 'react'
import './Experience.css'

function Experience() {
  const skillCategories = [
    {
      category: 'Language',
      skills: [
        { name: 'Java', experience: '5+ yrs' },
        { name: 'Python', experience: '4+ yrs' }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'SQL', experience: null },
        { name: 'NoSQL (MongoDB)', experience: null },
        { name: 'VectorDB', experience: null }
      ]
    },
    {
      category: 'Research',
      skills: [
        { name: 'AI/ML', experience: null },
        { name: 'LLM', experience: null },
        { name: 'Data Analytics', experience: null },
        { name: 'Healthcare Application', experience: null }
      ]
    }
  ]

  const experiences = [
    {
      title: 'Graduate Teaching/Research Assistant',
      period: '2022 - Present',
      responsibilities: [
        'Contributed to multiple research projects in the Data Science and Text Analytics (DATA) Lab and assisted in successful grant proposals totaling ∼$150K, funded by NMDSI and AHW.',
        'Mentored 3 undergraduate students in the ‘Research Experiences for Undergraduates (REU)’ program.',
        'Taught Introduction to Python Programming; TA’d for Introduction to Data Science, Principles of Database Systems, Big Data Systems, Operating Systems Lab.',
        'Facilitated lab sessions, prepared assignments, evaluated exam papers, and assessed various projects and assignments.'
      ]
    },
    {
      title: 'Software Engineer',
      period: '2016-2021',
      responsibilities: [
        'Developed and maintained enterprise-level software systems in Java, integrating 23 REST/SOAP services across platforms using RabbitMQ.',
        'Designed and optimized database interactions for managing over 1.5 million records, incorporating Apache Solr for real-time search functionality.',
        'Managed the full software development lifecycle, ensuring on-time delivery using agile methodologies with Git/Bitbucket for version control and Jira for project management.',
        'Mentored junior team members and conducted code reviews, strengthening team productivity and code quality.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {/* Skills Section - Compact design without sub-header */}
        <div className="skills-section">
          <div className="skills-compact">
            <div className="skill-header-row">
              <h3 className="top-skill-title">Top Skills</h3>
            </div>
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category-compact">
                <span className="category-label">{category.category}:</span>
                <div className="skills-badges">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill.name}
                      {skill.experience && <span className="skill-exp">{skill.experience}</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience-section">
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h4 className="experience-title">{exp.title}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="responsibility-item">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
