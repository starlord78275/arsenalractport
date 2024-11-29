import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="neon-text">Hi, I'm Nitin Gavande</h1>
        <p className="neon-description">
          Developer | AI Enthusiast | Freelance Innovator
        </p>
        <button className="neon-button">Download Resume</button>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>Internship at Emerging Technologies</h3>
            <p>
              Enhanced software efficiency with .NET and TensorFlow, achieving a
              93% improvement. Resolved critical bugs and contributed to
              technical documentation.
            </p>
          </div>
          <div className="experience-item">
            <h3>Freelance Software Development</h3>
            <p>
              Delivered tailored software solutions for 21 businesses. Created
              billing systems and optimized B2B websites for lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>Programming</h3>
            <p>Python, JavaScript, TypeScript, Go, Ruby, Java</p>
          </div>
          <div className="skill">
            <h3>Frameworks</h3>
            <p>Next.js, React.js, Angular, TensorFlow.js</p>
          </div>
          <div className="skill">
            <h3>Data Science</h3>
            <p>NumPy, Pandas, Spark</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="section-title">Highlighted Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <h3>Smart SDN</h3>
            <p>Built a software-defined networking system for efficient traffic management.</p>
          </div>
          <div className="project-item">
            <h3>ER Music</h3>
            <p>A music player powered by emotion detection.</p>
          </div>
          <div className="project-item">
            <h3>Anime Eye</h3>
            <p>Fun project inspired by anime, creating visual effects.</p>
          </div>
          <div className="project-item">
            <h3>Clones</h3>
            <p>Developed replicas of Twitter, Instagram, and Hulu.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Connect with me:</p>
        <div className="social-links">
          <a href="https://github.com/starlord78275" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arsenal-stark-891a7b31a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:arsenalstark78275@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
