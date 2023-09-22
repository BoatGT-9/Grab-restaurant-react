import { useState } from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/Navbar";
// import Add from "./pages/add";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurant/>}/>
          {/* <Route path="/add" element={<Add/>}/> */}
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      {/* <Card/> */}

     </>
  )
}

export default App
