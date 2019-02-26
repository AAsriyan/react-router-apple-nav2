import React from "react";
import { Route, NavLink } from "react-router-dom";

const Tv = () => {
  return (
    <div>
      <ul>
        <NavLink to="/tv/apple-tv-4k">Apple TV 4K</NavLink>
        <NavLink to="/tv/apple-tv">Apple TV</NavLink>
        <NavLink to="/tv/tv-app">TV App</NavLink>
        <NavLink to="/tv/accessories">Accessories</NavLink>
        <NavLink to="/tv/compare">Compare</NavLink>
      </ul>
    </div>
  );
};

export default Tv;
