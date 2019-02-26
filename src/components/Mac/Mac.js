import React from "react";
import MacBook from "./MacBook";
import MacBookAir from "./MacBookAir";
import { Route, NavLink } from "react-router-dom";
import MacBookPro from "./MacBookPro";
import iMac from "./iMac";
import iMacPro from "./iMacPro";
import MacPro from "./MacPro";
import MacMini from "./MacMini";
import MacAccessories from "./MacAccessories";
import Mojave from "./Mojave";
import MacCompare from "./MacCompare";

const Mac = () => {
  return (
    <div>
      <ul>
        <NavLink to="/mac/macbook">MacBook</NavLink>
        <NavLink to="/mac/macbook-air">MacBook Air</NavLink>
        <NavLink to="/mac/macbook-pro">MacBook Pro</NavLink>
        <NavLink to="/mac/imac">iMac</NavLink>
        <NavLink to="/mac/imac-pro">iMac Pro</NavLink>
        <NavLink to="/mac/mac-pro">Mac Pro</NavLink>
        <NavLink to="/mac/mac-mini">Mac Mini</NavLink>
        <NavLink to="/mac/accessories">Accessories</NavLink>
        <NavLink to="/mac/mojave">Mojave</NavLink>
        <NavLink to="/mac/compare">Compare</NavLink>
      </ul>
      <Route exact path="/mac/macbook" component={MacBook} />
      <Route exact path="/mac/macbook-air" component={MacBookAir} />
      <Route exact path="/mac/macbook-pro" component={MacBookPro} />
      <Route exact path="/mac/imac" component={iMac} />
      <Route exact path="/mac/imac-pro" component={iMacPro} />
      <Route exact path="/mac/mac-pro" component={MacPro} />
      <Route exact path="/mac/mac-mini" component={MacMini} />
      <Route exact path="/mac/mac-mini" component={MacMini} />
      <Route exact path="/mac/accessories" component={MacAccessories} />
      <Route exact path="/mac/mojave" component={Mojave} />
      <Route exact path="/mac/compare" component={MacCompare} />
    </div>
  );
};

export default Mac;
