import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
   render() {
      return (
<section>
<header id="header" class="header">
  <div class="container-fluid">
    <hgroup> 
      
     
      
      <h1> <a href="/" title="Picxa"><img src="assets/images/logo.png" alt="Picxa" title="Picxa"/></a> </h1>
      
 
      
      
      
      <nav>
        <div class="menu-expanded">
          <div class="nav-icon">
            <div id="menu" class="menu"></div>
            <p>menu</p>
          </div>
          <div class="cross"> <span class="linee linea1"></span> <span class="linee linea2"></span> <span class="linee linea3"></span> </div>
          <div class="main-menu">

          <ul>
                      <li>
                        <Link to="/">Home</Link>
                     </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                  </ul>

            
          </div>
        </div>
      </nav>
      
    
      
    </hgroup>
  </div>
</header>
</section>
);
   }
}
export default Header;