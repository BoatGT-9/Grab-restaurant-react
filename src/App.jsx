import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Add from "./pages/Add";
import Restaurant from "./pages/Restaurant";
// import Search from "./pages/Search"
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./pages/Edit";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Logout from "./pages/logout";
import Layout from "./components/layout";
import Profile from "./pages/Profile";
import protectRoute from "./pages/protectRoute";
import AdminRoute from "./pages/AdminRoute";
import Notallow from './pages/Notallow';
// import'./index.css'

// const Apps  = () => {
//   useEffect(()=>{
//     document.title ="Grab Restaurant";
//   })
// }

function App() {
  useEffect(() => {
    document.title = "Grab Restaurant";
  });
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Restaurant />} />
              <Route
                path="/add"
                element={
                  <AdminRoute>
                    <Add />
                  </AdminRoute>
                }
              />
              {/* <Route path="/search" element={<Search/>}/> */}
              <Route path="/Signin" element={<Signin />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/edit/:restaurantId" element={<Edit />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path='/notallow' element={<Notallow/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
