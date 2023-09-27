import React, { useState } from 'react'
// import { Prev } from 'react-bootstrap/esm/PageItem';
import { Link } from "react-router-dom";
import validation from '../signinvalidation';



const Signin = () => {

    const [username,setusername] = useState({
      username:'',
      password:'',
    })
    const [errors,setError] = useState({})
    const Input =(event)=>{
      setusername(Prev => ({...Prev,[event.target.name]:[event.target.value]}))
    }
    const handleClick = (event) => {
      event.preventDefault();
      setError(validation(username));
    }
// console.log(errors);
  return (
    <div className="container">
            <h1>Sign in</h1>
        <div className="row form">
        <div className="col-6 card justify-content-center shadow">
          <h5 className="card-header"> Signin User </h5>
          <div className="card-body">
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
                {errors.username && <span className='text-danger'>{errors.username}</span>}<br/>
                <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={Input}
                  placeholder="password"
                  required
                />
                {errors.password && <span className='text-danger'>{errors.password}</span>} <br/>
                
                <label htmlFor="name"> Conflime Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={Input}
                  placeholder="password"
                  required
                 
                />
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
               

              </div>
              <Link to="" className="btn btn-success"  onClick={handleClick}> Sign in </Link>
              {/* <button type="submit">Sign Up</button> แบบ เด้งขึ้นมา */} 
              <Link to="/SignUp" className="btn btn-warning" > Sign Up </Link>
              <Link to="/" className="btn btn-danger" > Cancel </Link>
            </form>
          </div>
</div>
</div>
  </div>
  )
}

export default Signin
