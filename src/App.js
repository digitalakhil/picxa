import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import Container from './Components/Container';
import Footer from './Components/Footer';


class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Container/>
            <Footer/>
         </div>
      );
   }
}
export default App;
