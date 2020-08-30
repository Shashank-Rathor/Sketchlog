import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <section className="header">
    <div className="headerLogo">
      logo
    </div>
    <div className="socialMenuHeader">
        <ul>
        <li><a href="https://www.facebook.com/"><img src={require("../../data/facebook-icon.png")}/></a></li>
        <li><a href="https://www.instagram.com/?hl=en"><img src={require("../../data/instagram-icon.png")}/></a></li>
        <li><a href="https://in.pinterest.com/"><img src={require("../../data/pintrest-icon.png")}/></a></li>
        </ul>
    </div>
    </section>
   )

 }

export default Header
