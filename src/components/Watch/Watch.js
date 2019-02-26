import React from "react";
import { Route, NavLink } from "react-router-dom";

const Watch = () => {
  return (
    <div>
      <ul>
        <NavLink to="/watch/apple-watch-series-4">Apple Watch Series 4</NavLink>
        <NavLink to="/watch/apple-watch-nike+">Apple Watch Nike+</NavLink>
        <NavLink to="/watch/apple-watch-hermes">Apple Watch Hermes</NavLink>
        <NavLink to="/watch/apple-watch-series-3">Apple Watch Series 3</NavLink>
        <NavLink to="/watch/watch-os">watchOS</NavLink>
        <NavLink to="/watch/mac-pro">Mac Pro</NavLink>
        <NavLink to="/watch/bands">Bands</NavLink>
        <NavLink to="/watch/accessories">Accessories</NavLink>
        <NavLink to="/compare">Compare</NavLink>
      </ul>
    </div>
  );
};

export default Watch;
