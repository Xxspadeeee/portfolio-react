import React, { useState, useEffect } from "react";
import "../css/NavBar.css";
function NavBar() {
  const [blur, setBlur] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${blur ? "blur" : ""}`}>
        <div className="navbar-container">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
