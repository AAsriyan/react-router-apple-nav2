import React from "react";
import { Route, NavLink } from "react-router-dom";

const iPad = () => {
  return (
    <div>
      <ul>
        <NavLink to="/ipad/ipad-pro">iPad Pro</NavLink>
        <NavLink to="/ipad/ipad-pro-10">iPad Pro 10.5"</NavLink>
        <NavLink to="/ipad/ipad-9">iPad 9.7"</NavLink>
        <NavLink to="/ipad/ipad-mini">iPad mini 4</NavLink>
        <NavLink to="/ipad/ios-12">iOS 12</NavLink>
        <NavLink to="/ipad/apple-pencil">Apple Pencil</NavLink>
        <NavLink to="/ipad/smart-keyboard">Smart Keyboard</NavLink>
        <NavLink to="/ipad/accessories">Accessories</NavLink>
        <NavLink to="/ipad/compare">Compare</NavLink>
      </ul>
    </div>
  );
};

export default iPad;
