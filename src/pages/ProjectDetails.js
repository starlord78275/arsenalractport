import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

// Project Data (Updated with new structure)
const projectData = [
    {
      id: "naruto-vision", 
      name: "Naruto Vision",
      description: "A computer vision project inspired by the anime Naruto, leveraging OpenCV and AI techniques for object detection.",
      image: require("../images/naruto-vision.webp"),
      purpose: "This project demonstrates the application of computer vision in recognizing objects and patterns in anime frames.",
      techStack: ["OpenCV", "Python", "Machine Learning", "Deep Learning", "TensorFlow"],
      features: [
        "Object detection in real-time anime scenes",
        "Face recognition and emotion detection",
        "Integration with AI models to predict character actions",
      ],
      codeSnippet: `// Code to apply the recognition model\nfunction applyRecognition(image) {\n  console.log("Detecting objects...");\n  // Apply image recognition here\n}`,
    },
    {
      id: "smart-sdn",
      name: "Smart SDN",
      description: "A Software-Defined Networking system that provides network traffic management for enhanced security.",
      image: require("../images/smart-sdn.webp"),
      purpose: "Smart SDN uses machine learning to detect network anomalies, DDoS attacks, and zero-day threats in real-time.",
      techStack: ["Nmap", "Python", "Scikit-learn", "Machine Learning", "Hacking-tool"],
      features: [
        "Real-time network traffic monitoring",
        "Dynamic DDoS mitigation strategies",
        "Zero-day attack detection using ML",
        "Scalable infrastructure using Docker and Kubernetes",
      ],
      codeSnippet: `// Code for threat detection initialization\nfunction initThreatDetection() {\n  console.log("Initializing network security...");\n  // Insert threat detection logic here\n}`,
    },
    {
      id: "ermusic", 
      name: "ER Music Player",
      description: "A music player powered by emotion detection to choose songs based on the user's mood.",
      image: require("../images/ermusic.jpg"),
      purpose: "This project utilizes emotion detection to play music that matches the user’s mood.",
      techStack: ["React", "Node.js", "WebSocket", "Machine Learning", "Express"],
      features: [
        "Emotion detection from facial expressions",
        "Real-time music streaming",
        "User-driven playlist creation",
      ],
      codeSnippet: `// Code to detect emotion and play music\nfunction detectEmotion(faceImage) {\n  console.log("Detecting emotion...");\n  // Insert emotion detection logic here\n}`,
    },
    {
      id: "load-balancer", 
      name: "Load Balancer",
      description: "A load balancing system designed for high-traffic applications to distribute network load efficiently.",
      image: require("../images/load_balencer.jpg"),
      purpose: "Load Balancer helps in maintaining high availability by distributing the incoming network traffic.",
      techStack: ["Go", "Docker", "Nginx", "HAProxy"],
      features: [
        "Automatic traffic distribution between servers",
        "Failover mechanism for high availability",
        "Scalable load balancing using Kubernetes",
      ],
      codeSnippet: `// Example of load balancing configuration\nfunction configureLoadBalancer() {\n  console.log("Configuring load balancer...");\n  // Add load balancing logic here\n}`,
    },
    {
      id: "twitter-clone", 
      name: "Twitter Clone (MERN)",
      description: "A MERN stack project replicating Twitter’s core features like posting, following, and real-time notifications.",
      image: require("../images/twitter-clone.jpg"),
      purpose: "The project replicates the basic features of Twitter, allowing users to post updates, follow others, and get real-time notifications.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      features: [
        "Real-time feed updates using WebSockets",
        "User authentication and session management",
        "Social network interaction features (follow, like, retweet)",
      ],
      codeSnippet: `// Code for sending a tweet\nfunction sendTweet(tweetContent) {\n  console.log("Sending tweet...");\n  // Insert tweet logic here\n}`,
    },
    {
      id: "instagram-clone", 
      name: "Instagram Clone",
      description: "An Instagram-like platform built with React and Firebase, supporting image uploading and user authentication.",
      image: require("../images/instagram-clone.jpg"),
      purpose: "This project allows users to upload images, follow other users, and share content similar to Instagram’s basic features.",
      techStack: ["React", "Firebase", "Node.js", "Firestore"],
      features: [
        "Image upload and gallery display",
        "User authentication with Firebase",
        "Follow and post features",
      ],
      codeSnippet: `// Code for image upload\nfunction uploadImage(imageFile) {\n  console.log("Uploading image...");\n  // Insert upload logic here\n}`,
    },
    {
      id: "hulu-clone", 
      name: "Hulu Clone",
      description: "A clone of Hulu's streaming platform built using the MERN stack, with user authentication and a custom media player.",
      image: require("../images/hulu-clone.jpg"),
      purpose: "The Hulu Clone replicates the features of Hulu, allowing users to browse, search, and stream TV shows and movies.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Mongoose", "OAuth"],
      features: [
        "Streaming videos in real-time",
        "Search and filter TV shows and movies",
        "User authentication with OAuth integration",
      ],
      codeSnippet: `// Code to initialize video streaming\nfunction startStreaming(videoFile) {\n  console.log("Starting video stream...");\n  // Insert stream initialization here\n}`,
    },
    {
      id: "self-driving-cars", 
      name: "Self-Driving Cars",
      description: "A simulation of self-driving cars using AI and sensors for lane detection and decision making.",
      image: require("../images/self-driving-cars.jpg"),
      purpose: "This project simulates the functionality of self-driving cars, using AI to make driving decisions and avoid obstacles.",
      techStack: ["Python", "OpenCV", "TensorFlow", "Keras"],
      features: [
        "Lane detection and obstacle avoidance",
        "AI-based decision making for traffic scenarios",
        "Real-time simulation with sensor data integration",
      ],
      codeSnippet: `// Code for lane detection\nfunction detectLane(frame) {\n  console.log("Detecting lanes...");\n  // Lane detection logic here\n}`,
    },
    {
      id: "chatapp", 
      name: "Chat App",
      description: "A real-time chat application using Node.js and WebSockets for live communication between users.",
      image: require("../images/chatapp.jpg"),
      purpose: "This chat app enables real-time messaging between users with a modern chat interface.",
      techStack: ["Node.js", "WebSockets", "Express", "React", "Socket.io"],
      features: [
        "Real-time chat with WebSocket support",
        "User authentication and session management",
        "Group and direct messaging functionality",
      ],
      codeSnippet: `// Code to handle message sending\nfunction sendMessage(message) {\n  console.log("Sending message...");\n  // Message handling logic here\n}`,
    },
  ];
  

function ProjectDetails() {
  const { projectId } = useParams(); // Get the dynamic project ID from the URL

  // Find the project by ID
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-details-container">
      <h1 className="neon-text">{project.name}</h1>

      {/* Project Description */}
      <section className="project-details">
        <p className="project-description">{project.description}</p>

        {/* Project Purpose */}
        <div className="project-purpose">
          <h2>Purpose</h2>
          <p>{project.purpose}</p>
        </div>

        {/* Project Technology Stack */}
        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <ul>
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Main Project Image */}
        <div className="project-image">
          <img src={project.image} alt={project.name} />
        </div>

        {/* Project Features */}
        {project.features && project.features.length > 0 && (
          <div className="project-features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Code Snippet */}
        {project.codeSnippet && (
          <div className="project-features">
            <h2>Code Snippet</h2>
            <pre>
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProjectDetails;
