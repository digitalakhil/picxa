import React, { Component } from 'react';

class ContactContainer extends React.Component {
   render() {
      return (

<section>

<main class="main-wrapper-inner" id="container">

            	<div class="container">

                    <div class="wrapper-inner">

                    	

                        <div class="map-wrapper">

                            <div id="surabaya"></div>

                        </div>

                        

                        <div class="contact-wrapper">

                        	

                        	<div class="inner-left">

                            	<p class="phone"><a href="tel:8197654321">+8197654321</a></p>

                            	<p class="email"><a href="mailto:contact@Picxa.com">contact@Picxa.com</a></p>

                            </div>

                            

                            <div class="inner-right">

                            	<header>

                                	<h4>Feel Free to Contact Me</h4>

                                </header>

                                

                                <div class="contact-form">

                                    <div id="message"></div>

                                    <form method="post" action="php/contactfrom.php" name="cform" id="cform">

                                    	<label>Whats your name <span>*</span>

                                        	<input  name="name" id="name" type="text" />

                                        </label>

                                        <label>Whats your email <span>*</span>

                                        	<input  name="email" id="email" type="email" />

                                        </label>

                                        <div class="clearfix"></div>

                                        <label>Whats in your mind

                                        	<textarea name="comments" id="comments" cols="" rows=""></textarea>

                                        </label>

                                        <div class="clearfix"></div>

                                        <input name="" type="submit" value="Send Mail"/>

                                    	<div id="simple-msg"></div>

                                    </form>

                                </div>

                                

                            </div>

                            

                        </div>

                       
                    </div>

                </div>

            </main>

</section>

);
   }
}
export default ContactContainer;