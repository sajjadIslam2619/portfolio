import React from 'react'
import './Activities.css'

function Activities() {
  const activities = [
    {
      type: 'Certification',
      items: [
        {'text': 'Azure Fundamentals by Microsoft (AZ-900)', 'link': 'https://learn.microsoft.com/en-us/users/kmsajjadulislam-8760/credentials/8d50827f38ac6fea?ref=https%3A%2F%2Fwww.linkedin.com%2F'},
        {'text': 'Microsoft Certified: Azure AI Engineer Associate (AI-102)', 'link': 'https://learn.microsoft.com/api/credentials/share/en-us/KMSajjadulIslam-8760/A71502970F987226?sharingId=8B71D64481834F52'},
      ]
    },
    {
      type: 'Course',
      items: [
        {'text': 'Generative AI with Large Language Models (Coursera)', 'link': 'https://www.coursera.org/learn/generative-ai-with-llms?utm_campaign=WebsiteCoursesGAI'}, 
        {'text': 'Natural Language Processing Specialization (Coursera)', 'link': 'https://www.coursera.org/specializations/natural-language-processing'}
      ]
    },
    {
      type: 'Award',
      items: [
        'NMDSI Summer Scholar 2024', 
        'Computer Science Summer Research Fellowship 2025',
        {
          text: '2nd place in the inaugural \'Hack for Health\' hackathon competition organized by NMDSI',
          link: 'https://innv.northwesternmutual.com/blog/nmdsi-s-inaugural-hack-for-health-explores-the-impact-of-sleep-apnea-on-cancer'
        }
      ]
    },
    {
      type: 'Professional Activity',
      items: [
        'Reviewer of JMIR Journal, IEEE IRI 2025'
      ]
    },
    {
      type: 'Volunteer Work',
      items: [
        'Co-founded \'Love for Science\', a volunteer organization to encourage rural school children about science in Bangladesh'
      ]
    }
  ]

  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">Activities</h2>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <span className="activity-type">{activity.type}</span>
              <ul className="activity-items-list">
                {activity.items.map((item, itemIndex) => {
                  const itemText = typeof item === 'string' ? item : item.text
                  const itemLink = typeof item === 'object' ? item.link : null
                  
                  return (
                    <li key={itemIndex} className="activity-item-text">
                      {itemText}
                      {itemLink && (
                        <a href={itemLink} className="activity-link" target="_blank" rel="noopener noreferrer">
                          {' '}[Link]
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
