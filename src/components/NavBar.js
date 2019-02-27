import React from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faApple} className="apple-icon" />
          </NavLink>
          <NavLink exact to="/mac">
            Mac
          </NavLink>
          <NavLink exact to="/ipad">
            iPad
          </NavLink>
          <NavLink exact to="/iphone">
            iPhone
          </NavLink>
          <NavLink exact to="/watch">
            Watch
          </NavLink>
          <NavLink exact to="/tv">
            TV
          </NavLink>
          <NavLink exact to="/music">
            Music
          </NavLink>
          <NavLink exact to="/support">
            Support
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
