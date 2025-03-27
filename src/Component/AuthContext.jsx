// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser));
//     }
//   }, []);

//   const login = (email, password) => {
 
//     const userData = { email };
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//     navigate("/dashboard");
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};

