import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">EduCraft</div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li className="dropdown" onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)}>
          Classes <FaChevronDown />
          {categoriesOpen && (
            <ul className="dropdown-menu">
              <li>Engineering</li>
              <li>Medical</li>
              <li>Commerce</li>
              <li>Music</li>
              <li>Art and Craft</li>
              <li>Yoga</li>
              <li>Mind Health</li>
              <li>UPSC</li>
            </ul>
          )}
        </li>
        <li>Features</li>
        <li>Dashboard</li>
        <li>About Us</li>
        <li>Contact</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;



