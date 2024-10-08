import { useState } from "react";
import "./navigation.css";

export default function Root(props) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <nav className="navigation">
      <ul className="vertical">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="has-submenu"
        >
          <a className="has-submenu" href="#services">
            Services
          </a>
          {showSubMenu && (
            <ul className="submenu">
              <li>
                <a href="#investment">Investment</a>
              </li>
              <li>
                <a href="#retirement">Retirement</a>
              </li>
              <li>
                <a href="#savings">Savings</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="user-info">
        <span className="user-name">Mr John Doe</span>
        <span className="user-email">john.doe@example.com</span>
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
}
