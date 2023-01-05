import {useAppContext  } from "../Context/appcontext";
import React from "react";
import './SearchPage.css';
import {BsFillBookmarkHeartFill,BsFillBookmarkXFill} from 'react-icons/bs';

import '../Characteristics/characteristics.css';





const SearchCard = ({ book }) => {
     

    const {favourites,addToFavourites,removeFromFavourites} = useAppContext();
    console.log('favourites are',favourites);
    
    const favouritesChecker  = (id) => {
        const boolean = favourites.some((item) => item.id === id);
        return boolean;
    };

    
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !== undefined)
                    {
                        return (
                            <>
                             <div className="card1" >
               
               <img src={thumbnail} alt="img" id="card" className="card1-image"/>
               <div className="card-content">
                   <div className="" > <h3 className="tit">{item.volumeInfo.title}</h3></div>
                   <div className="desc"> <p>&#8377;{amount}  </p></div>

                   <div className="fav-btn"> 
               
                   {favouritesChecker(item.id) ? (
                                    <button className="favourite" onClick={() => removeFromFavourites(item.id)}>
                                      <BsFillBookmarkXFill size={30}  />
                                 </button>
                                ) : (
                                   <button className="favourite" onClick={() => addToFavourites(item)}>
                                  <BsFillBookmarkHeartFill size={30}  />
                                 </button> 
                                ) }

                   </div>
           </div>
           </div>
                           
                             
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default SearchCard;