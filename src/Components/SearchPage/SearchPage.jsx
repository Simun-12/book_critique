import React from "react";
import bg1img from './bg1.jpeg';
import SearchCard from "./SearchCard";
import { useState } from "react";
import axios from "axios";
import './SearchPage.css'


function Search (){
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
  
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    const searchBoob=()=>{
      
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
        }
    

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div> 
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress ={searchBook}/>
                        <button onClick={searchBoob}  ><i  className="fas fa-search"></i></button>
                    </div>
                    <img src ={bg1img} alt="" />
                </div>
            </div>

            <div className="container1">
              {
                    <SearchCard book={bookData}/>
              }  
            </div>
           
        </>
    )
}
export default Search;