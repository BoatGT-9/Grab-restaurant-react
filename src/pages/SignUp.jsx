import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
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
        <div className="col-6 card justify-content-center">
          <h5 className="card-header"> Signin User </h5>
        <div className='card-body'>
        <form>
        <div className="form-group"> 
        <label htmlFor="name"> User Name </label>
        <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Username"
                  
                  />
         <label htmlFor="name"> Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="passworld"
                  placeholder="email@gmail.com"
                  />
        <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="passworld"
                  placeholder="password"
                  />
        <label htmlFor="name"> Confirm Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="passworld"
                  placeholder="password"
                  />
              
            </div>
            <Link to="" className="btn btn-success" > Sign in </Link>
              <Link to="/SignUp" className="btn btn-warning" > Sign Up </Link>
              <Link to="/" className="btn btn-danger" > Cancel </Link>
              
         
        </form>

        </div>
</div>
</div>
    </div>
  )
}

export default SignUp
