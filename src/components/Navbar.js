import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false); // Close the menu when a link is clicked
    navigate(path);
  };

  return (
    <nav className="circular-nav neon">
      <div className="circle">
        <div
          onClick={() => handleNavClick("/")}
          className="nav-item neon-glow"
          title="Home"
        >
          🏠
        </div>
        <div
          onClick={() => handleNavClick("/work")}
          className="nav-item neon-glow active"
          title="Work"
        >
          💻
        </div>
        <div
          onClick={() => handleNavClick("/about")}
          className="nav-item neon-glow"
          title="About"
        >
          📖
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
