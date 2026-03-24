import { useState } from 'react'
import './About.css'
import { aboutMe } from '../utils/about'

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutMe.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aboutMe.length) % aboutMe.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="about-container">
      <div className="carousel">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          ❮
        </button>
        
        <div className="slides">
          {aboutMe.map((about, index) => (
            <div 
              key={about.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <div className="about-content">
                <div className="about-info">
                  <h4 className="name">{about.name}</h4>
                  <p className="description">{about.description}</p>
                </div>
                
                <div className="about-side">
                  <img src={about.side} alt="Side-Image" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
      
      <div className="carousel-dots">
        {aboutMe.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default About