import React, {useState}from 'react'
import {Link,useNavigate} from "react-router-dom";
import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const add = () => {
  const [restaurant,setRestaurant] =useState({
    name :"",
    type:"",
    imageUrl:""
  })
  const Navigate = useNavigate();
  const [error,setError] =useState(false);
  return (
    <div>
      
    </div>
  )
}

 
export default add