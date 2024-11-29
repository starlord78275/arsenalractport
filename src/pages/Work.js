import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Work.css";

// Project Data
const projectData = [
  {
    id: "naruto-vision",  // Use a unique ID for each project
    name: "Naruto Vision",
    description: "A computer vision project inspired by the anime Naruto.",
    image: require("../images/naruto-vision.webp"),
  },
  {
    id: "smart-sdn",
    name: "Smart SDN",
    description: "A Software-Defined Networking system for efficient traffic.",
    image: require("../images/smart-sdn.webp"),
  },
  {
    id: "ermusic",
    name: "ER Music Player",
    description: "A music player powered by emotion detection.",
    image: require("../images/ermusic.jpg"),
  },
  {
    id: "load-balancer",
    name: "Load Balancer",
    description: "A load balancing system for distributed networks.",
    image: require("../images/load_balencer.jpg"),
  },
  {
    id: "twitter-clone",
    name: "Twitter Clone",
    description: "A MERN stack project replicating Twitter's core features.",
    image: require("../images/twitter-clone.jpg"),
  },
  {
    id: "instagram-clone",
    name: "Instagram Clone",
    description: "An Instagram-like platform built with React and Firebase.",
    image: require("../images/instagram-clone.jpg"),
  },
  {
    id: "self-driving-cars",
    name: "Self-Driving Cars",
    description: "A simulation of self-driving cars using AI and sensors.",
    image: require("../images/self-driving-cars.jpg"),
  },
  {
    id: "chatapp",
    name: "Chat App",
    description: "A real-time chat application with Node.js and WebSocket.",
    image: require("../images/chatapp.jpg"),
  },
];

function Work() {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <div className="work-container">
      {/* Left Panel - Project Index */}
      <div className="project-index">
        <h2 className="neon-text">Projects</h2>
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`project-item ${
              selectedProject.name === project.name ? "active" : ""
            }`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Use Link to navigate to the project's detailed page */}
            <Link to={`/projects/${project.id}`}>
              {project.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Right Panel - Project Details */}
      <div className="project-details">
        <img
          src={selectedProject.image}
          alt={selectedProject.name}
          className="selected-project-image"
        />
        <h2>{selectedProject.name}</h2>
        <p>{selectedProject.description}</p>
        <Link
          to={`/projects/${selectedProject.id}`}
          className="neon-button"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default Work;
