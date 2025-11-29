import React, { useState, useEffect } from 'react'
import './Projects.css'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

// Import project images
import fallbackImage from '../../images/fallback-image.jpg'
import project4Image1 from '../../images/project-4/project4-image1.jpg'
import project4Image2 from '../../images/project-4/project4-image2.jpg'
import project5Image1 from '../../images/project-5/project5-image1.jpg'

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    // Load Vimeo player script
    useEffect(() => {
        if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
            const script = document.createElement('script')
            script.src = 'https://player.vimeo.com/api/player.js'
            script.async = true
            document.body.appendChild(script)
        }
    }, [])

    const projects = [
        {
            title: 'Clinical Entity Extractor',
            shortDescription: 'Clinical Entity Extractor',
            fullDescription: 'This project focuses on detecting and classifying medical terminology using natural language processing techniques. It explores preprocessing, feature extraction, and machine learning approaches to identify key clinical terms within text. The work demonstrates how medical entities can be extracted, categorized, and analyzed to support downstream applications such as clinical decision support, medical documentation, and automated health information systems.',
            tech: 'Python(Flask), Fine-tuned BERT(ClinicalBERT)',
            links: { github: 'https://github.com/sajjadIslam2619/Medical-Terminology-Detection-Classification', huggingface: 'sdf', live: 'sdfsd' },
            media: [
                { type: 'vimeo', videoId: '1016288275' }
            ]
        },
        {
            title: 'LLM-enhanced Peer Support System',
            shortDescription: 'LLM-enhanced Peer Support System for people who use drugs',
            fullDescription: `
            This project develops an AI-enhanced Peer Support System (PSS) designed to support people who use drugs (PWUD) through structured surveys, risk scoring, and AI-assisted mentor responses. The application is built using Django, React, PostgreSQL, and Azure deployment pipelines, providing role-specific workflows for mentors and mentees.

            The system integrates several AI components. A fine-tuned BERT model classifies mentee posts into mental-status categories such as stress, depression, anxiety, loneliness, and suicide risk using the IMHI dataset. A personalized prompting engine uses GPT with few-shot examples, RAG, and LangChain to generate context-aware, empathetic mentor responses grounded in mentee history, mental-status classification, and risk scores. Ablation studies isolate the impact of different prompt elements.

            To ensure quality and safety, the system uses automated evaluation through the G-EVAL LLM-as-Judge framework and human evaluation using safety-sensitive prompts and real OUD support posts. These components create a robust platform for generating and validating AI-assisted peer support responses in recovery contexts.
            `,
            tech: 'Python(Django), Postgres, RAG, Prompt Engineering, LLM',
            links: { github: '', huggingface: '', live: '' },
            media: [
                { type: 'vimeo', videoId: '1020239730' }
            ]
        },

        {
            title: 'LLM  Evaluation Framework (In-Progress)',
            shortDescription: 'LLM Fesibility Evaluation for Peer Support System.',
            fullDescription: 'This project develops an AI-enhanced peer support evaluation application that assesses how effectively large language models (LLMs) such as GPT, Gemini, and DeepSeek can generate empathetic, culturally competent responses for veterans with PTSD. The system integrates a mental-status classifier with a prompt-engineering pipeline and enables real-time evaluation of LLM-generated responses by veterans and peer mentors. Through structured prompts, few-shot examples, and iterative lab-based rating sessions, the application collects human feedback on empathy, tone, cultural fit, safety, and relevance. The platform supports ablation studies, LLM-as-Judge scoring, and human-centered usability testing, providing a rigorous framework for comparing LLM performance in sensitive mental health contexts.',
            tech: 'Python (FastAPI, SQLAlchemy), React',
            links: { github: 'https://github.com/sajjadIslam2619/PSS-LLM-Evaluation', huggingface: '', live: '' },
            media: [
                { type: 'image', url: fallbackImage }
            ]
        },
        {
            title: 'Mental Health Disorder Analysis',
            shortDescription: 'Mental Health Disorder Analysis',
            fullDescription: 'A comprehensive research project for mental health condition classification using explainable AI (XAI) techniques. This project implements transformer-based models to classify text into mental health categories including depression, anxiety, stress, PTSD, suicide ideation, and none.',
            tech: 'BERT (RoBERTa), XAI (Layer Integrated Gradients, keyBERT)',
            links: { github: 'https://github.com/sajjadIslam2619/mental-health-disorder-analysis', huggingface: 'https://huggingface.co/collections/SajjadIslam/multimentalroberta-models', live: '' },
            media: [
                { type: 'image', url: project4Image1 || fallbackImage },
                { type: 'image', url: project4Image2 || fallbackImage }
            ]
        },
        {
            title: 'Medical Insurance Cost Analysis',
            shortDescription: 'Predictive Analytics for Insurance Charge Modeling',
            fullDescription: 'This Business Intelligence project aims to transform unorganized health insurance data into actionable insights that support strategic decision-making. By analyzing key factors such as age, sex, BMI, smoking status, region, and number of children, the project will reveal patterns that influence insurance charges. The resulting analytics platform will help the organization improve pricing strategies, identify high-risk customers, and design targeted marketing campaigns. Overall, this data-driven approach will enhance operational efficiency, strengthen risk management, and increase customer satisfaction and market competitiveness.',
            tech: 'R, Regression Analysis, Data Visualization',
            links: { github: 'https://github.com/sajjadIslam2619/Medical_Insurance_Cost_Analysis', huggingface: '', live: '' },
            media: [
                { type: 'image', url: project5Image1 || fallbackImage }
            ]
        }
    ]

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }

    const handleProjectClick = (project) => {
        setSelectedProject(project)
        setCurrentMediaIndex(0)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setCurrentMediaIndex(0)
    }

    const handleMediaPrev = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prev) =>
                prev === 0 ? selectedProject.media.length - 1 : prev - 1
            )
        }
    }

    const handleMediaNext = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prev) =>
                prev === selectedProject.media.length - 1 ? 0 : prev + 1
            )
        }
    }

    const getVisibleProjects = () => {
        const visible = []
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length
            visible.push(projects[index])
        }
        return visible
    }

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-slider">
                    <button className="slider-btn prev-btn" onClick={handlePrev} aria-label="Previous">
                        ‹
                    </button>
                    <div className="projects-container">
                        {getVisibleProjects().map((project, index) => (
                            <div
                                key={index}
                                className="project-card"
                                onClick={() => handleProjectClick(project)}
                            >
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.shortDescription}</p>
                                <p className="project-tech">{project.tech}</p>
                                <button className="view-project-btn">View Project</button>
                            </div>
                        ))}
                    </div>
                    <button className="slider-btn next-btn" onClick={handleNext} aria-label="Next">
                        ›
                    </button>
                </div>
                <div className="slider-dots">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close">
                            ×
                        </button>
                        <h2 className="modal-title">{selectedProject.title}</h2>
                        <div className="modal-media-container">
                            {selectedProject.media.length > 1 && (
                                <button className="media-nav-btn prev-media" onClick={handleMediaPrev}>
                                    ‹
                                </button>
                            )}
                            <div className="modal-media">
                                {selectedProject.media[currentMediaIndex].type === 'vimeo' ? (
                                    <div className="vimeo-wrapper">
                                        <iframe
                                            src={`https://player.vimeo.com/video/${selectedProject.media[currentMediaIndex].videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            className="vimeo-iframe"
                                            title={selectedProject.title}
                                        />
                                    </div>
                                ) : selectedProject.media[currentMediaIndex].type === 'video' ? (
                                    <video
                                        src={selectedProject.media[currentMediaIndex].url}
                                        controls
                                        autoPlay
                                        className="modal-video"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        src={selectedProject.media[currentMediaIndex].url}
                                        alt={selectedProject.title}
                                        className="modal-image"
                                    />
                                )}
                            </div>
                            {selectedProject.media.length > 1 && (
                                <button className="media-nav-btn next-media" onClick={handleMediaNext}>
                                    ›
                                </button>
                            )}
                        </div>
                        {selectedProject.media.length > 1 && (
                            <div className="media-dots">
                                {selectedProject.media.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`media-dot ${index === currentMediaIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentMediaIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="modal-info">
                            <div className="modal-description">
                                {selectedProject.fullDescription.split('\n').map((line, index) => (
                                    line.trim() ? (
                                        <p key={index} className={line.startsWith('-') ? 'description-bullet' : ''}>
                                            {line}
                                        </p>
                                    ) : null
                                ))}
                            </div>
                            <p className="modal-tech">{selectedProject.tech}</p>
                            <div className="modal-links">
                                {selectedProject.links?.github && (
                                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                                        <FaGithub className="link-icon" />
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {selectedProject.links?.huggingface && (
                                    <a href={selectedProject.links.huggingface} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                                        <SiHuggingface className="link-icon" />
                                        <span>Hugging Face</span>
                                    </a>
                                )}
                                {selectedProject.links?.live && (
                                    <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                                        <FaGlobe className="link-icon" />
                                        <span>Live</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
