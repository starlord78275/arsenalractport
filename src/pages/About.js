import React, { useState, useEffect } from "react";
import "./About.css";

const milestones = [
  {
    year: 2018,
    title: "Started My Coding Journey",
    description:
      "Began learning backend and frontend development. Worked on various freelance projects, laying the foundation for my programming skills.",
    image: require("../images/milestone-2024.jpg"),
  },
  {
    year: 2019,
    title: "Freelance Developer",
    description:
      "Joined a local freelancer group as a Junior Backend Developer. Explored new technologies and frameworks, and delivered projects for private companies.",
    image: require("../images/freelnacer.png"),
  },
  {
    year: 2020,
    title: "First Full-Stack Project",
    description:
      "Developed my first full-stack web application using React, Node.js, and MongoDB. This project solidified my understanding of end-to-end development.",
    image: require("../images/milestone-fullstack.jpg"),
  },
  {
    year: 2021,
    title: "College and AI Exploration",
    description:
      "Joined college to further my education. Started delving into AI and ML technologies, working on projects involving OpenCV and TensorFlow.",
    image: require("../images/collage.jpg"),
  },
  {
    year: 2022,
    title: "Advanced AI Projects",
    description:
      "Built complex AI projects using OpenCV and TensorFlow. Enhanced my skills in machine learning and computer vision, contributing to impactful digital products.",
    image: require("../images/advanced.jpg"),
  },
  {
    year: 2023,
    title: "Networking and AI/ML Focus",
    description:
      "Focused on developing networking systems with SDN and advanced AI/ML projects. Delivered impactful solutions that improve efficiency and performance.",
    image: require("../images/networking.jpg"),
  },
  {
    year: 2024,
    title: "Current Endeavors",
    description:
      "Continuing to build impactful networking and AI/ML solutions. Exploring new technologies and expanding my portfolio with innovative projects.",
    image: require("../images/current.webp"),
  },
];

function About() {
  const [selectedYear, setSelectedYear] = useState(2018);
  const [currentMilestone, setCurrentMilestone] = useState(milestones[0]);

  useEffect(() => {
    const milestone = milestones.find((m) => m.year === selectedYear);
    if (milestone) {
      setCurrentMilestone(milestone);
    }
    updateBars(selectedYear);
  }, [selectedYear]);

  const handleSliderChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const updateBars = (year) => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      const milestoneYear = 2018 + index;
      if (milestoneYear <= year) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
  };

  return (
    <div className="about-container cyberpunk-theme">
      <h1 className="neon-text">My Journey</h1>
      <div className="timeline-container">
        {/* Timeline Content */}
        <div className="timeline-content">
          <h2 className="year">{currentMilestone.year}</h2>
          <h3 className="title">{currentMilestone.title}</h3>
          <p className="description">{currentMilestone.description}</p>
        </div>

        {/* Timeline Slider */}
        <div className="timeline-bars">
          <input
            type="range"
            min="2018"
            max="2024"
            value={selectedYear}
            step="1"
            className="timeline-slider"
            onChange={handleSliderChange}
          />
          <div className="years">
            {milestones.map((milestone) => (
              <span key={milestone.year}>{milestone.year}</span>
            ))}
          </div>
          <div className="vertical-bars">
            {milestones.map((_, index) => (
              <div key={index} className="bar"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="profile-pic">
        <img src={currentMilestone.image} alt={currentMilestone.title} />
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/starlord78275" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/arsenal-stark-891a7b31a/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://x.com/ArsenalStark" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com/arsenal71299/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default About;
