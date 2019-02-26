import React from "react";
import { Route, NavLink } from "react-router-dom";
import AppleMusic from "./AppleMusic";
import iTunes from "./iTunes";
import HomePod from "./HomePod";
import AirPods from "./AirPods";
import iPodTouch from "./iPodTouch";
import MusicAccessories from "./MusicAccessories";
import GiftCards from "./GiftCards";

const Music = () => {
  return (
    <div>
      <ul>
        <NavLink to="/music/apple-music">Apple Music</NavLink>
        <NavLink to="/music/itunes">iTunes</NavLink>
        <NavLink to="/music/homepod">HomePod</NavLink>
        <NavLink to="/music/airpods">AirPods</NavLink>
        <NavLink to="/music/ipod-touch">iPod touch</NavLink>
        <NavLink to="/music/music-accessories">Music Accessories</NavLink>
        <NavLink to="/music/gift-cards">Gift Cards</NavLink>
      </ul>

      <Route exact path="/music/apple-music" component={AppleMusic} />
      <Route exact path="/music/itunes" component={iTunes} />
      <Route exact path="/music/homepod" component={HomePod} />
      <Route exact path="/music/airpods" component={AirPods} />
      <Route exact path="/music/ipod-touch" component={iPodTouch} />
      <Route
        exact
        path="/music/music-accessories"
        component={MusicAccessories}
      />
      <Route exact path="/music/gift-cards" component={GiftCards} />
    </div>
  );
};

export default Music;
