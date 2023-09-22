import React from "react";
import { Link } from "react-router-dom";
import Restaurant from "../pages/Restaurant";
const Card = ( {restaurant} ) => {
    // console.log(restaurant.imageurl);
  return (
    <div className='card' style={{width:"18rem"}} key={restaurant.id}>
                            <img src={restaurant.imageurl} alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='title'>{restaurant.name}</h5>
                                <p className='card-text'>{restaurant.type}</p>
                                <Link  to="" className='btn btn-danger px-2 mx-1' > 
                                    Delete
                                </Link>
                                <Link  to="" className='btn btn-warning px-2 mx-1' > 
                                    Edit
                                </Link>

                            </div>
                        </div>
  )
};

export default Card;
