import React from "react";
import {Link} from 'react-router-dom'
import "./navbar.css"
import { BsFillBookFill } from 'react-icons/bs';
import { useState } from "react";



function Navbar(){

  const[color,setColor] = useState(false)
  const changeColor = () =>{
      if(window.scrollY >= 100)
        {setColor(true);}
        else {setColor(false);}
  };
    window.addEventListener("scroll",changeColor);
    return(
     <div className="Navbar">
        
       <div className="">
          <nav className={color?'main2':'main1'}>
            <div className="link"> 
                  <div className="port"  >
                      <Link to="/" >
                      <h2 className="heading"><BsFillBookFill size={35} className={color?"log1":"log"} /></h2></Link> 
                  
              <ul>
                <li>
                <Link to='/' className={color?"navigation1":"navigation"}>Home </Link> 
                </li>
                <li>
                <Link to='./search' className={color?"navigation1":"navigation"}>Search </Link>
                </li>
                <li>
                <Link to='./login' className={color?"navigation1":"navigation"}>Login</Link>
                </li>
                <li>
                <Link to='./chat' className={color?"navigation1":"navigation"}>Chat </Link>
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