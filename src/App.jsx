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
import Chat from "./Component/Chat";
import Signup from "./Component/signup";
import Login from "./Component/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="app-container">
                  <Sidebar />
                  <div className="main-content">
                    <Header />
                    <div className="page-content">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/courses" element={<Row />} />
                        <Route path="/course-details" element={<DetailsCourse />} />
                        <Route path="/sources" element={<Resources />} />
                        <Route path="/chat" element={<Chat />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
