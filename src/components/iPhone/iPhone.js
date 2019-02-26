import React from "react";
import { Route, NavLink } from "react-router-dom";
import iPhoneXs from "./iPhoneXs";
import iPhoneXr from "./iPhoneXr";
import iPhone8 from "./iPhone8";
import iPhone7 from "./iPhone7";
import ios12 from "./ios12";
import AirPods from "./AirPods";
import iPhoneAccessories from "./iPhoneAccessories";
import iPhoneCompare from "./iPhoneCompare";

const iPhone = () => {
  return (
    <div>
      <ul>
        <NavLink to="/iphone/iphone-xs">iPhone Xs</NavLink>
        <NavLink to="/iphone/iphone-xr">iPhone Xr</NavLink>
        <NavLink to="/iphone/iphone-8">iPhone 8</NavLink>
        <NavLink to="/iphone/iphone-7">iPhone 7</NavLink>
        <NavLink to="/iphone/ios-12">iOS 12</NavLink>
        <NavLink to="/iphone/airpods">AirPods</NavLink>
        <NavLink to="/iphone/accessories">Accessories</NavLink>
        <NavLink to="/iphone/compare">Compare</NavLink>
      </ul>

      <Route exact path="/iphone/iphone-xs" component={iPhoneXs} />
      <Route exact path="/iphone/iphone-xr" component={iPhoneXr} />
      <Route exact path="/iphone/iphone-8" component={iPhone8} />
      <Route exact path="/iphone/iphone-7" component={iPhone7} />
      <Route exact path="/iphone/ios-12" component={ios12} />
      <Route exact path="/iphone/airpods" component={AirPods} />
      <Route exact path="/iphone/accessories" component={iPhoneAccessories} />
      <Route exact path="/iphone/compare" component={iPhoneCompare} />
    </div>
  );
};

export default iPhone;
