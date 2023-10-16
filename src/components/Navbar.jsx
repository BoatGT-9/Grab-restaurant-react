import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Restaurant from "../pages/Restaurant";
// import'./index.css'
import authService from "../service/auth.service";
import { useAuthContext } from "../context/Authcontext";

const Navbar = () => {
  // const [user, setUser] = useState(authService.getCrrentUser());
  const {user, logout} = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () =>{
    logout();
    navigate("/signin");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-drak  bg-drak">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ color: "#000" }} to="/">
          Graprestaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "#000" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
             </li>
             {user &&( 
               <li className="nav-item">
              <Link className="nav-link " style={{ color: "#000" }} to="/add">
                Add
              </Link>
            </li>
              )}
          </ul>
            <div className="Signin">
          {!user && (
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    style={{ color: "#000" }}
                    aria-current="page"
                    to="/Signin"
                  >
                    Signin
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    style={{ color: "#000" }}
                    to="/SignUp"
                  >
                    SignUp
                  </Link>
                </li>
              </ul>
                )}
            {user && (
                 <ul className="nav justify-content-end ">
                  <li className="nav-item">
                    <span className="mr-sm2  " style={{margin:"auto"}}>
                     <Link to={"/profile"}>
                     {user.username}
                     </Link> 
                    <Link 
                    className="logout"
                    style={{color:"#000"}}
                    to="/logout" onClick={handleLogout}
                    > Logout</Link>
                    </span>
                    
                  </li>
                </ul>
              )
              }
            </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
