import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

function Task2(){
  return(
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<Task2/>, document.getElementById("root"));
reportWebVitals();
