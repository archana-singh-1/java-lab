import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Row from "./Component/Row";
import DetailsCourse from "./Details/DetailsCourse";
import { AuthProvider } from "./Component/AuthContext"; 
import ProtectedRoute from "./Component/ProtectedRoute";
import "./App.css";
import Resources from "./Component/Resources";
import Signup from "./Component/signup";
import Login from "./Component/Login";

function App() {
  return (
    <Router> 
      <AuthProvider> 
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <div className="page-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/courses" element={<ProtectedRoute><Row /></ProtectedRoute>} />
                <Route path="/course-details" element={<ProtectedRoute><DetailsCourse /></ProtectedRoute>} />
                <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />

                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

