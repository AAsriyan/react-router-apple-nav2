import React from "react";
import { Route, NavLink } from "react-router-dom";

const Music = () => {
  return (
    <div>
      <ul>
        <NavLink to="/music/apple-music">Apple Music</NavLink>
        <NavLink to="/music/itunes">iTunes</NavLink>
        <NavLink to="/music/macbook-pro">MacBook Pro</NavLink>
        <NavLink to="/music/homepod">HomePod</NavLink>
        <NavLink to="/music/airpods">AirPods</NavLink>
        <NavLink to="/music/ipod-touch">iPod touch</NavLink>
        <NavLink to="/music/music-accessories">Music Accessories</NavLink>
        <NavLink to="/music/gift-cards">Gift Cards</NavLink>
      </ul>
    </div>
  );
};

export default Music;
