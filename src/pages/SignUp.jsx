import React, { useState } from 'react'
// import { Prev } from 'react-bootstrap/esm/PageItem';
import { Link, useNavigate } from "react-router-dom";
import validation from '../signUpvalidation';
const SignUp = () => {
  
  const [username,setusername] = useState({
    username:'',
    email:'',
    password:''
  })
  const [errors,setError] = useState({})
  const Input =(event)=>{
    setusername(Prev => ({...Prev,[event.target.name]:[event.target.value]}))
  }
  const handleClick = (event) => {
    event.preventDefault();
    setError(validation(username));
  }
    // const [username, setusername] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmpassword:"",
    //   });
    //   const navigate = useNavigate();
    //   const [error, setError] = useState(false);
    
    //   const handelChange = (e) => {
    //     setRestaurant((prev)=>({...prev, [e.target.name]:e.target.value}));
    //   }
    //   const handleClick = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await axios.post(`${URL}/restaurant`,restaurant, config);
    //       navigate("/")
    //     } catch (error) {
    //       console.error(error);
    //       setError(true);
    //     }
    //   }
    //   const handleClear = () => {
    //     setRestaurant({
    //       name: "",
    //       type: "",
    //       imageurl: "",
    //     });
    //     setError(false);
    //   }
    
  return (
    <div className='container'>
        <h1>Sign Up</h1>
        <div className="row form">
        <div className="col-6 card justify-content-center shadow">
          <h5 className="card-header"> Signin User </h5>
        <div className='card-body'>
        <form>
        <div className="form-group"> 
        <label htmlFor="name"> User Name </label>
        <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={Input}
                  placeholder="Username"
                  
                  />
        {errors.name && <span className='text-danger'>{errors.name}</span>}<br/>
         <label htmlFor="name"> Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={Input}
                  placeholder="email@gmail.com"
                  />
                  {errors.email && <span className='text-danger'>{errors.email}</span>}<br/>
        <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={Input}
                  placeholder="password"
                  />
                  {errors.password && <span className='text-danger'>{errors.password}</span>}<br/>
        <label htmlFor="name"> Confirm Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={Input}
                  placeholder="password"
                  />
                  {errors.password && <span className='text-danger'>{errors.password}</span>}<br/>
              
            </div>
            <Link to="/Signin" className="btn btn-success" > Sign in </Link>
              <Link to="/Signin" className="btn btn-warning" onClick={handleClick}> Sign Up </Link>
              <Link to="/" className="btn btn-danger" > Cancel </Link>
              
         
        </form>

        </div>
</div>
</div>
    </div>
  )
}

export default SignUp
