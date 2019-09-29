import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import Container from './Components/Container';
import AboutContainer from './Components/AboutContainer';
import ContactContainer from './Components/ContactContainer';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends React.Component {
  constructor(props) {
    super(props);
    
      this.state={
         header:"Content of the header", footer:"Copyright goes here"
      }
  }
  render() {
    return (

      <div>
     

          <Router>
        
                  
                   <Header/>

                  
                     <Route exact path="/" component={Container} />
                     <Route path="/about" component={AboutContainer} />
                     <Route path="/contact" component={ContactContainer} />
                   
         
           </Router>

           <Footer/>
           </div>
      );
  }
}

export default App;
