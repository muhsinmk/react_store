import React from "react";
import {Link} from "react-router-dom"
import {useAppContext} from "../hooks/useAppContext"
function Header() {  
  const {state:{siteName,cart}} = useAppContext()
  const cartCount = cart.reduce((acc,curr) => acc + curr.count,0)
  return <div className="appHeader">
    <h1><Link to="/">{siteName}</Link></h1>  
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart({cartCount})</Link></li>
      </ul>  
    </div>;
}

export default Header;
