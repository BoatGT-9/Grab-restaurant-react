/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};


const Edit = () => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        type: "",
        imageurl: "",
      });
      const navigate = useNavigate();
      const [error, setError] = useState(false);
      const {restaurantId} = useParams();
      const handelChange = (e) => {
        setRestaurant((prev)=>({...prev, [e.target.name]:e.target.value}));
      }
      useEffect(() => {
        const fetchAllRestaurants = async () => {
          try {
            const res = await axios.get(`${URL}/restaurant/${restaurantId}`, config);
            setRestaurant(res.data.result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchAllRestaurants();
      }, [restaurantId]);

      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`${URL}/restaurant/${restaurantId}`,restaurant, config);
          navigate("/")
        } catch (error) {
          console.error(error);
          setError(true);
        }
      }

      const handleClear = () => {
        setRestaurant({
          name: "",
          type: "",
          imageurl: "",
        });
        setError(false);
      }
  return (
    <div className="container">
    <h1>Grab Restaurant</h1>
    <div className="row form">
      <div className="col-6 card justify-content-center">
        <h5 className="card-header"> Edit Restaurant </h5>
        <div className="error">{error && "Somthing went wrong"}</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name"> Restaurant name </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                onChange={handelChange}
                value={restaurant.name}
              />
              <label htmlFor="name"> Restaurant type </label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="type"
                onChange={handelChange}
                value={restaurant.type}
              />
              <label htmlFor="name"> Restaurant img </label>
              <input
                type="text"
                className="form-control"
                name="imageurl"
                placeholder="img"
                onChange={handelChange}
                value={restaurant.imageurl}
              />
            </div>
            <Link to="" className="btn btn-success" onClick={handleClick}> Edit </Link>
            <Link to="/" className="btn btn-danger" > Cancle </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit