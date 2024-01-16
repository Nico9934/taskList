import { createContext, useState, useContext } from "react";
import { loginRequest, logoutRequest, registerRequest } from "../api/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // const login = async (user) => {
  //   try {
  //     const res = await loginRequest(user);
  //     setIsAuthenticated(true);
  //     setUser(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (error.response) console.log(error.response.data);
    }
  };

  const logout = async (user) => {
    const res = await logoutRequest();
    try {
      setIsAuthenticated(false);
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        setUser,
        isAuthenticated,
        logout,
        userLogin,
        setUserLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
