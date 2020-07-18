import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo-section">
        <Link to="/">mcqDB</Link>
      </div>
      <div className="links-section">
        <ul>
          <li>
            <Link to="/contests">contests</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/enter">enter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
