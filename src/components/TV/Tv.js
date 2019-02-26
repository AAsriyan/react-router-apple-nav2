import React from "react";
import { Route, NavLink } from "react-router-dom";
import AppleTv4k from "./AppleTv4k";
import AppleTv from "./AppleTv";
import TvAccessories from "./TvAccessories";
import TvApp from "./TvApp";
import TvCompare from "./TvCompare";

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

      <Route exact path="/tv/apple-tv-4k" component={AppleTv4k} />
      <Route exact path="/tv/apple-tv" component={AppleTv} />
      <Route exact path="/tv/tv-app" component={TvApp} />
      <Route exact path="/tv/accessories" component={TvAccessories} />
      <Route exact path="/tv/compare" component={TvCompare} />
    </div>
  );
};

export default Tv;
