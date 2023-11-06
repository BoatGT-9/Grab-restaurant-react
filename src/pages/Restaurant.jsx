import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';
import axios from "axios";
import Card from "../components/Card";
import authHeader from "../service/auth.headers";
import API from "../service/api";
import Loading from "../components/Loading";
import * as loadingData from "../Loading/Animation - 1698821532565.json";
import Swal from 'sweetalert2'
import {useAuthContext} from '../context/Authcontext';

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

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // เพิ่มสถานะ isLoading
  useEffect(() => {
    const fethAllRes = async () => {
      try {
        const res = await API.get(`/restaurant`);
        setRestaurants(res.data);
        setIsLoading(false); // เมื่อโหลดเสร็จแล้ว กำหนด isLoading เป็น false
      } catch (err) {
        console.log(err);
      }
    };
    fethAllRes();
  }, []);//ใน []  ทุกครั้งที่โหลดขึ้นมาจะสั่งsetloading 
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async(result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/restaurant/${id}`);

          await Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
            // สั่งรีโหลดหน้าของ page  เพื่อจะให้ useEfect ทำงานอีกครั้ง 
            window.location.reload();
          } catch (error) {
            console.error(error);
          }
        }
      })
  };

  return (
    <div>
      <h1>Restaurant</h1>
      <form className="d-flex grid">
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
        {!isLoading ? (
          <div className="restaurants">
            {restaurants
              .filter((restaurant) => {
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
        ) : (
          <Loading animation={loadingData} /> // สั่งโหลด menu
        )}
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
