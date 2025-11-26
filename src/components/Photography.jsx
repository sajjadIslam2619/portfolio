import React, { useState } from 'react'
import './Photography.css'
import horseArizona from '../../images/photography/horse-Arizona.jpg'
import lakeMichigan from '../../images/photography/lake-michigan.jpg'
import redbudPlatt from '../../images/photography/redbud-platt.jpg'
import snowMilw from '../../images/photography/snow-milw.jpg'
import gondolaVenice from '../../images/photography/gondola-venice.jpg'

function Photography() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, url: horseArizona, title: 'Wild West.' },
    { id: 2, url: lakeMichigan, title: 'Last Light.' },
    { id: 3, url: redbudPlatt, title: 'Colors!!' },
    { id: 4, url: snowMilw, title: 'Emptiness..' },
    { id: 5, url: gondolaVenice, title: 'Serenity.' }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const getVisibleImages = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length
      visible.push(images[index])
    }
    return visible
  }

  return (
    <section id="photography" className="photography">
      <div className="container">
        <h2 className="section-title">Photography</h2>
        <div className="photography-slider">
          <button className="slider-btn prev-btn" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          <div className="images-container">
            {getVisibleImages().map((image, index) => (
              <div
                key={image.id}
                className="photo-card"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="photo-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
                  }}
                />
                <div className="photo-overlay">
                  <span className="photo-title">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </div>
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="modal-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
              }}
            />
            <h3 className="modal-image-title">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default Photography

