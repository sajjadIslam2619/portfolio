import React from 'react'
import './Publications.css'

function Publications() {
  const publications = [
    {
      title: 'multiMentalRoBERTa: A Fine-tuned Multiclass Classifier for Mental Health Disorder',
      authors: 'K M Sajjadul Islam, John Fields, Praveen Madiraju',
      venue: 'IEEE International Conference on Big Data (BigData) (Accepted)',
      year: '2025',
      link: 'https://arxiv.org/abs/2511.04698'
    },
    {
      title: 'LLM-Based Prompt Ensemble for Reliable Medical Entity Recognition from EHRs',
      authors: 'K M Sajjadul Islam, Ayesha Siddika Nipu, Jiawei Wu, Praveen Madiraju',
      venue: 'IEEE International Conference on Information Reuse and Integration and Data Science (IRI)',
      year: '2025',
      link: 'https://ieeexplore.ieee.org/abstract/document/11153096'
    },
    {
      title: 'Contextual Embedding-based Clustering to Identify Topics for Healthcare Service Improvement',
      authors: 'K M Sajjadul Islam, Ravi Teja Karri, Srujan Vegesna, Jiawei Wu, Praveen Madiraju',
      venue: 'IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)',
      year: '2025',
      link: 'https://ieeexplore.ieee.org/abstract/document/11126706'
    }
    ,
    {
      title: 'Autocompletion of Chief Complaints in the Electronic Health Records using Large Language Models',
      authors: 'K M Sajjadul Islam, Ayesha Siddika Nipu, Praveen Madiraju, Priya Deshpande',
      venue: 'IEEE International Conference on Big Data (BigData)',
      year: '2023',
      link: 'https://ieeexplore.ieee.org/abstract/document/10386778'
    }
  ]

  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-venue">{pub.venue}, {pub.year}</p>
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                  View Publication →
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="publications-footer">
          <p className="publications-note">
            More work can be found on{' '}
            <a 
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=1c8FG8kAAAAJ&sortby=pubdate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="scholar-link"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Publications
