import {useContext,createContext,useState} from 'react';
import authService from '../service/auth.service';
const AuthContext = createContext(null);
export const  AuthProvider = ({children}) =>{
    const [user,setUser] = useState (null);
    const login  = (user) =>setUser(user);
    const logout = () => {
        authService.logout();
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuthContext = () => useContext(AuthContext);