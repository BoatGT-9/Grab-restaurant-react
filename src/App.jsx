import { useState } from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/Navbar";
import Add from "./pages/Add";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from "./pages/Edit";
// import'./index.css'


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurant/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/edit/:restaurantId" element={<Edit />} />
        </Routes>
      </div>
      </BrowserRouter>
      

     </>
  )
}

export default App
