import ProjectsCarousel from './components/Projects'
import About from './components/About'
import NavBar from './components/Nav'
import './App.css'

function App() {
  
  return (
    <>
      <NavBar />
      <div id="home" className="glass-container">
        <div className="content">
          <div className="top">
            <div className="title-section">
              <h1>Daniel John</h1>
              <div className="subtitle">
                <p>Software Developer</p>
              </div>
            </div>
          </div>

          <div className="intro-section">
            <h2>I am a <span>developer</span> specialising in building scalable web <span>applications.</span></h2>
          </div>
        </div>
      </div>

      <div id="projects" className="glass-container">
        <div className="content">
          <h3>Featured Projects</h3>
          <ProjectsCarousel />
        </div>
      </div>

      <div id="about" className="glass-container">
        <div className="content">
          <h3>About</h3>
          <About />
        </div>
      </div>

      <div id="contact" className="glass-container">
        <div className="content">
          <h3>Contact</h3>

          <div className="contact-section">

            <h4>Hit Me Up!</h4>

            <div className="contact-details">
              <div className="socials">
                <a href="https://www.x.com/nnaemekaxjohn/">Twitter ↗</a>
                <a href="https://www.linkedin.com/in/nnaemekaxjohn/">LinkedIn ↗</a>
                <a href="https://docs.google.com/document/d/1Z8Gm6kgeJz5LBnrAPKdd42-CR6Npt2II00YJ8D2JCkw/edit?usp=sharing">CV ↗</a>
                <a href="https://dev.to/dukeofhazardz/">Blog ↗</a>
                <a href="https://github.com/dukeofhazardz/">GitHub ↗</a>
              </div>

              <div className="basic">
                <p>Email <span><a href="mailto:dj71286@gmail.com">dj71286@gmail.com</a></span></p>
                <p>Phone <span><a href="tel:+2349033225114" >+2349033225114</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App