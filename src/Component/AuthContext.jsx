import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        setUser({ username: decoded.username });
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem("token"); // अगर गलत टोकन हो तो इसे हटा दें
      setUser(null);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      alert("Login Successfully");
      localStorage.setItem("token", res.data.token);
      const decoded = jwtDecode(res.data.token);
      setUser({ username: decoded.username });
    } catch (error) {
      alert("Login failed!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
