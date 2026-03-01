import React from 'react';
import BackGroundHeroImg from './images/hero-background.jpg';

const App: React.FC = () => {
  const navLinkStyle: React.CSSProperties = {
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    opacity: 0.8, // Slightly dimmed for better hierarchy vs the Logo
  };

  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <nav style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        backgroundColor: "#CB7EE0", 
        padding: "15px 40px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        zIndex: 1000,
        boxSizing: "border-box",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}>
        <div style={{ color: "#FFFFFF", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold" }}>
          MyWebsite
        </div>   
        <ul style={{ listStyle: "none", display: "flex", gap: "30px", margin: 0, padding: 0 }}>
          <li style={navLinkStyle}>Home</li>
          <li style={navLinkStyle}>About</li>
          <li style={navLinkStyle}>Services</li>
          <li style={navLinkStyle}>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div style={{ 
        backgroundColor: "#151C24", 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", // Centers text vertically
        justifyContent: "space-between",
        paddingTop: "60px", // Offsets the fixed navbar
      }}>
        <div style={{ padding: "0 5% ", maxWidth: "40%" }}>
          <h1 style={{ 
            color: "#FFFFFF", 
            fontSize: "3.5rem", 
            lineHeight: "1.2",
            margin: "0 0 20px 0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)" // Improves contrast against image
          }}>
            Welcome to Our Website
          </h1>
          <p style={{ 
            color: "#CBD5E0", // Slightly off-white for better readability
            fontSize: "1.2rem", 
            margin: "0",
            lineHeight: "1.6"
          }}>
            Discover amazing content and connect with us.
          </p>
        </div>

        <div style={{ width: "50%", height: "100vh", overflow: "hidden" }}>
          <img 
            src={BackGroundHeroImg} 
            alt="Background Hero" 
            style={{ 
              height: "100%", 
              width: "100%", 
              objectFit: "cover", // Prevents the image from stretching
              display: "block"
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;