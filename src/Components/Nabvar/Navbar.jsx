import React from "react";
import {Link} from 'react-router-dom'
import "./navbar.css"



function Navbar(){

 
    
    return(
     <div className="Navbar">
        
       <div className="">
          <nav className="main">
            <div className="link"> 
                  <div className="port"  >
                      <Link to="/" className="logo">
                      <h2 className="heading">BG.</h2></Link> 
                  
              <ul>
                <li>
                <Link to='/' className="navigation">Home </Link> 
                </li>
                <li>
                <Link to='./search' className="navigation">Search </Link>
                </li>
                <li>
                <Link to='./login' className="navigation">Login</Link>
                </li>
                <li>
                <Link to='./chat' className="navigation">Chat </Link>
                </li>
              </ul>
              </div>
            </ div>
            </ nav>
            </div>
          
          </div>
        
          

         
        
    

    );
}

export default Navbar;