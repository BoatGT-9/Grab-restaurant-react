import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext";

const ProtectRoute = ({children}) =>{
    const {user} = useAuthContext();
    if(!user){
        return <Navigate to="/signin"/>
    }
    return children
}

export default ProtectRoute