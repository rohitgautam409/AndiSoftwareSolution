import React from 'react'
import "./Navbar.css"
import logo from "./logo.jpg"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" />
        <div className="nav_items ">
          <li>Home</li>
          <li>About Us</li>
          <li>Cloud Software</li>
        </div>
        
      </div>
      <div class="banner">
        <h3>Freelancers/Franchise/Reseller Required in all major cities</h3>
      </div>
    </>
  );
}

export default Navbar