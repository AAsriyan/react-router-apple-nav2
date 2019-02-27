import React from "react";
import { Route, NavLink } from "react-router-dom";
import AppleWatchSeries4 from "./AppleWatchSeries4";
import AppleWatchNike from "./AppleWatchNike";
import AppleWatchHermes from "./AppleWatchHermes";
import AppleWatchSeries3 from "./AppleWatchSeries3";
import WatchOS from "./WatchOS";
import Bands from "./Bands";
import WatchAccessories from "./WatchAccessories";
import WatchCompare from "./WatchCompare";
import NavBar from "../NavBar";

const Watch = () => {
  return (
    <div>
      <NavBar />
      <ul className="watch-nav">
        <NavLink to="/watch/apple-watch-series-4">Apple Watch Series 4</NavLink>
        <NavLink to="/watch/apple-watch-nike+">Apple Watch Nike+</NavLink>
        <NavLink to="/watch/apple-watch-hermes">Apple Watch Hermes</NavLink>
        <NavLink to="/watch/apple-watch-series-3">Apple Watch Series 3</NavLink>
        <NavLink to="/watch/watch-os">watchOS</NavLink>
        <NavLink to="/watch/bands">Bands</NavLink>
        <NavLink to="/watch/accessories">Accessories</NavLink>
        <NavLink to="/watch/compare">Compare</NavLink>
      </ul>

      <Route
        exact
        path="/watch/apple-watch-series-4"
        component={AppleWatchSeries4}
      />
      <Route exact path="/watch/apple-watch-nike+" component={AppleWatchNike} />
      <Route
        exact
        path="/watch/apple-watch-hermes"
        component={AppleWatchHermes}
      />
      <Route
        exact
        path="/watch/apple-watch-series-3"
        component={AppleWatchSeries3}
      />
      <Route exact path="/watch/watch-os" component={WatchOS} />
      <Route exact path="/watch/bands" component={Bands} />
      <Route exact path="/watch/accessories" component={WatchAccessories} />
      <Route exact path="/watch/compare" component={WatchCompare} />
    </div>
  );
};

export default Watch;
