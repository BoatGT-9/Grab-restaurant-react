/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import authHeader from "../service/auth.headers";
import API from "../service/api"
// const URL = import.meta.env.VITE_BASE_URL;
// const USERNAME = import.meta.env.VITE_BASE_USERNAME;
// const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
// const config = {
//   auth: {
//     username: USERNAME,
//     password: PASSWORD,
//   },
//   headers:authHeader(),
// };

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageurl: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handelChange = (e) => {
    setRestaurant((prev)=>({...prev, [e.target.name]:e.target.value}));
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/restaurant`,restaurant,);
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
    
    <div className="container ">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center shadow">
          <h5 className="card-header"> Add new Restaurant </h5>
          <div className="error" style={{color:"red"}}>{error && "Somthing went wrong"}</div>
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
              <Link to="" className="btn btn-success" onClick={handleClick}> Add </Link>
              <Link to="" className="btn btn-danger" onClick={handleClear}> Clear </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;