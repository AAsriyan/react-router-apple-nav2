import React from "react";
import { Route, NavLink } from "react-router-dom";

const iPhone = () => {
  return (
    <div>
      <ul>
        <NavLink to="/iphone/iphone-xs">iPhone Xs</NavLink>
        <NavLink to="/iphone/iphone-xr">iPhone Xr</NavLink>
        <NavLink to="/iphone/iphone-8">iPhone 8</NavLink>
        <NavLink to="/iphone/iphone-7">iPhone 7</NavLink>
        <NavLink to="/iphone/ios-12-2">iOS 12</NavLink>
        <NavLink to="/iphone/airpods">AirPods</NavLink>
        <NavLink to="/iphone/mac-mini">Mac Mini</NavLink>
        <NavLink to="/iphone/accessories">Accessories</NavLink>
        <NavLink to="/compare">Compare</NavLink>
      </ul>
    </div>
  );
};

export default iPhone;
