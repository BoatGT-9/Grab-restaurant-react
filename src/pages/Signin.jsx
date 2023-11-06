import React, { useState } from "react";
// import { Prev } from 'react-bootstrap/esm/PageItem';
import { Link, useNavigate } from "react-router-dom";
import Validation from "../signinvalidation";
import authService from "../service/auth.service";
import Loading from "../components/Loading";
import * as loadingData from "../Loading/Animation - 1698821532565.json";
import { useAuthContext } from "../context/Authcontext";
const Signin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // เพิ่มสถานะ isLoading
  const [username, setusername] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { login } = useAuthContext();
  const Input = (e) => {
    setusername((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const current = await authService.login(
        username.username,
        username.password
      );
      setIsLoading(true); // เมื่อโหลดเสร็จแล้ว กำหนด isLoading เป็น false
      console.log(current.status);
      login(current);
      navigate("/");
    } catch (error) {
      setErrors(Validation(username));
    }
  };
  // console.log(errors);
  return (
    <div className="container">
      <h1>Sign in</h1>
      <div className="row form">
        {!isLoading ? (
          <div className="col-6 card justify-content-center shadow">
            <h5 className="card-header"> Signin User </h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name"> User Name </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={Input}
                    placeholder="Username"
                    value={username.username}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                  <br />
                  <label htmlFor="name"> Password </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={Input}
                    placeholder="password"
                    // required
                    value={username.password}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}{" "}
                  <br />
                  {/* <label htmlFor="name"> Conflime Password </label>
                <input
                type="password"
                className="form-control"
                name="confrime_password"
                onChange={Input}
                placeholder="confrime password"
                required
                 
                />
                 {errors.confrime_password && <span className='text-danger'>{errors.confrime_password}</span>}
                */}
                </div>
                <Link to="" className="btn btn-success" onClick={handleClick}>
                 
                  Sign in
                </Link>
                {/* <button type="submit">Sign Up</button> แบบ เด้งขึ้นมา */}
                <Link to="/SignUp" className="btn btn-warning">
                  
                  Sign Up
                </Link>
                <Link to="/" className="btn btn-danger">
                  
                  Cancel
                </Link>
              </form>
            </div>
          </div>
            ) : (
              <Loading animation={loadingData} /> // สั่งโหลด menu
        )}
      </div>
    </div>
  );
};

export default Signin;
