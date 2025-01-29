import React from "react";
import "./HeroSection.css"; // Ensure you create this CSS file
import heroImage from "../assets/hero-image.png";



const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>One place for all your learning</h1>
        <p>EduCraft turns PDFs and lectures into multilingual, AI-powered videos and audio with gamified simulations. Engage in live doubt-solving, adaptive quizzes, and flashcards based on the forgetting curve.Track progress with smart scoring, leaderboards, and streaks, while exploring textbooks, podcasts, and more—all in one interactive learning hub!</p>
        <div className="cta-container">
          <input type="text" placeholder="+91 Enter phone number" className="phone-input"/>
          <button className="get-started-btn cta-button">Get Started</button>
        </div>
        <div className="app-buttons">
          <button className="playstore">📲 Google Play</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
