import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const [restaurants, setRestaurant] = useState([]);
  useEffect(() => {
    const fethAllRes = async () => {
      try {
        const res = await axios.get(`${URL}/restaurant`, config);
        setRestaurant(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fethAllRes();
  }, []);
  return (
    <div>   
      Restaurant
      <div className="row">
        <div className="restaurant">
          {restaurants.map((restaurant) => {
            return (
              <div className="card" style={{width: "18rem"}} key={restaurant.id}>
                <img
                  src={restaurant.imageurl}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="title">{restaurant.name}</h5>
                  <p className="cardtext">{restaurant.type}</p>
                  <Link to="" className="btn btn-danger px-2">
                    delete
                  </Link>
                  <Link to="" className="btn btn-warning px-2">
                    edit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
