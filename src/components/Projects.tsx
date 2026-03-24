import { useState } from 'react'
import './Projects.css'
import { projects } from '../utils/projects'

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="slides">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <div className="project-content">
                <div className="project-info">
                  <h4 className="name">{project.name}</h4>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="description">
                    <p className="description-text">{project.description}</p>
                  </div>
                  <a
                    href={project.iframeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Project ↗
                  </a>
                </div>

                <div className="project-iframe">
                  <iframe
                    src={project.iframeUrl}
                    title={project.name}
                    frameBorder="0"
                    allowFullScreen
                    scrolling='no'
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
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
        {projects.map((_, index) => (
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

export default ProjectsCarousel