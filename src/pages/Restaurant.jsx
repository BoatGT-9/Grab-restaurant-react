import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';
import axios from "axios";
import Card from "../components/Card";
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText,setSearchText] = useState([]);
  useEffect(() => {
    const fethAllRes = async () => {
      try {
        const res = await axios.get(`${URL}/restaurant`, config);
        setRestaurants(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fethAllRes();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/restaurant/${id}`, config);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Restaurant</h1>
      <form style={{margin:"10"}} className="d-flex">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </form>

      <div className="row">
        <div className="restaurants">
            
          {restaurants.filter((restaurant)=>{
            return restaurant.name.includes(searchText);
          })
          .map((restaurant) => {
            return (
              <Card
                handleDelete={handleDelete}
                restaurant={restaurant}
                key={restaurant.id}
              />
            );
          })}
        </div>
      </div>
      {/* <div className='card' style={{width:"18rem"}} key={restaurants.id}>
                            <img src={restaurants.imageurl} alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h5 className='title'>{restaurants.name}</h5>
                                <p className='card-text'>{restaurants.type}</p>
                                <Link  to="" className='btn btn-danger px-2 mx-1' > 
                                    Delete
                                </Link>
                                <Link  to="" className='btn btn-warning px-2 mx-1' > 
                                    Edit
                                </Link>

                            </div>
                        </div> */}
    </div>
  );
};

export default Restaurant;
