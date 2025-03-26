import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Row from "./Component/Row";
import DetailsCourse from "./Details/DetailsCourse";
import "./App.css";
import Resources from "./Component/Resources";
import Chat from "./Component/Chat";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={
          <div className="app-container">
            <Row />
          </div>
        } />
              <Route path="/course-details" element={<DetailsCourse />} />
              <Route path="/sources" element={<Resources/>} />
              <Route path="/chat" element={<Chat/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;