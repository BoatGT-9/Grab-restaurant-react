import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/Authcontext";
const Layout = () => {
    return (
        <AuthProvider>
            <Navbar/>
            <div className="App"></div>
            <Outlet/>
        </AuthProvider>
    )
}
export default Layout;