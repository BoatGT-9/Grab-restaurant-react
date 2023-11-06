import React from "react";
import { Link } from "react-router-dom";
import {useAuthContext} from '../context/Authcontext'
// import Restaurant from "../pages/Restaurant";
const Card = ( {restaurant,handleDelete} ) => {
        const {user} =  useAuthContext
  return (
    <div className='card shadow ' style={{width:"18rem"}} key={restaurant.id}>
                            <img src={restaurant.imageurl} alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='title'>{restaurant.name}</h5>
                                <p className='card-text'>{restaurant.type}</p>
                                <Link  to={`/edit/${restaurant.id}`} className='btn btn-warning px-2 mx-1' > 
                                    Edit
                                </Link>
                                <Link  to="" className='btn btn-danger px-2 mx-1'onClick={() => {
                                    handleDelete(restaurant.id);
                                  }}> 
                                    Delete
                                </Link>

                            </div>
                        </div>
  )
};

export default Card;
