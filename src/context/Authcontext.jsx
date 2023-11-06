import { useContext, createContext, useState, useEffect } from "react";
import authService from "../service/auth.service";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => setUser(user);
  const logout = () => {
    authService.logout();
    setUser(null);
  };
  function getUser() {
    const temp = localStorage.getItem("user");
    const savedUser = JSON.parse(temp);
    return savedUser || null;
  }
  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
      // console.log(temp);
  }, [user]);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
