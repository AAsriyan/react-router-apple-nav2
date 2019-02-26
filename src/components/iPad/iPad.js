import React from "react";
import iPadPro from "./iPadPro";
import iPadPro10 from "./iPadPro10";
import iPad9 from "./iPad9";
import iPadMini from "./iPadMini";
import ios12 from "./ios12";
import ApplePencil from "./ApplePencil";
import SmartKeyboard from "./SmartKeyboard";
import iPadAccessories from "./iPadAccessories";
import iPadCompare from "./iPadCompare";
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

      <Route exact path="/ipad/ipad-pro" component={iPadPro} />
      <Route exact path="/ipad/ipad-pro-10" component={iPadPro10} />
      <Route exact path="/ipad/ipad-9" component={iPad9} />
      <Route exact path="/ipad/ipad-mini" component={iPadMini} />
      <Route exact path="/ipad/ios12" component={ios12} />
      <Route exact path="/ipad/apple-pencil" component={ApplePencil} />
      <Route exact path="/ipad/smart-keyboard" component={SmartKeyboard} />
      <Route exact path="/ipad/accessories" component={iPadAccessories} />
      <Route exact path="/ipad/compare" component={iPadCompare} />
    </div>
  );
};

export default iPad;
