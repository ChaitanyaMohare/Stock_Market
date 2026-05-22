import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const API_URL = "http://localhost:3002";

  // Check if user is logged in on mount
  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          const response = await axios.get(`${API_URL}/api/auth/verify`, {
            headers: { Authorization: `Bearer ${storedToken}` }
          });
          setUser(response.data.user);
          setToken(storedToken);
        } catch (error) {
          localStorage.removeItem("token");
          setToken(null);
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
      });

      const { token: newToken, user: userData } = response.data;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setUser(userData);
      
      // Set default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed"
      };
    }
  };

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        username,
        email,
        password
      });

      const { token: newToken, user: userData } = response.data;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setUser(userData);
      
      // Set default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed"
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  // Set authorization header if token exists
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export default AuthContext;
