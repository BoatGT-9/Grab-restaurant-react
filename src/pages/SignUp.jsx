import React, { useState } from "react";
// import { Prev } from 'react-bootstrap/esm/PageItem';
import { Link, useNavigate } from "react-router-dom";
import validation from "../signUpvalidation";
import authService from "../service/auth.service";
const SignUp = () => {
  const navigate = useNavigate();

  const [username, setusername] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setError] = useState({});
  const [errormessage, Seterrormessage] = useState({ message: "" });
  const Input = (event) => {
    setusername((Prev) => ({
      ...Prev,
      [event.target.name]: [event.target.value],
    }));
  };
  // console.log(register);
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      if (username.password === username.password) {
        const register = await authService.register(
          username.username,
          username.email,
          username.password
        );

        navigate("/Signin");
      } else {
        setError(ture), Seterrormessage({ message: "มันซ้ำกันอะ" });
      }
    } catch (error) {
      console.log(error);
      setError(validation(username));
      Seterrormessage(error.response.data);
    }
  };
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
    <div className="container">
      <h1>Sign Up</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center shadow">
          <h5 className="card-header"> Signin User </h5>
          <div className="card-body">
            <div className="error">{errors && errormessage.message}</div>
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
                <label htmlFor="name"> Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={Input}
                  placeholder="email@gmail.com"
                  value={username.email}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
                <br />
                <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={Input}
                  placeholder="password"
                  value={username.password}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
                <br />
                <label htmlFor="name"> Confirm Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  onChange={Input}
                  placeholder="password"
                  value={username.confirmpassword}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
                <br />
              </div>
              <Link to="/Signin" className="btn btn-success">
                {" "}
                Sign in{" "}
              </Link>
              <Link
                to="/Signin"
                className="btn btn-warning"
                onClick={handleClick}
              >
                {" "}
                Sign Up{" "}
              </Link>
              <Link to="/" className="btn btn-danger">
                {" "}
                Cancel{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
