import React from "react";
import { Route, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
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
