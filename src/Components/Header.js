import React, { Component } from 'react';

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
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="blog.html">blog</a></li>
              <li><a href="contact.html">contact</a></li>
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