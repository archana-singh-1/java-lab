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

const rowData = [
  [{ logo: "https://preview.redd.it/some-people-may-think-that-the-book-in-granny-is-the-book-v0-7ndcpqgu02jb1.png?width=640&crop=smart&auto=webp&s=1572fb87ecce9fd169e50d51469d8d9e667f7ffc", authorImg: "https://www.w3schools.com/w3images/avatar2.png",  progress: "Completed", course:"Design & Histor", authorName:"William joe" } ],
  [{ logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png", authorImg: "https://www.w3schools.com/w3images/avatar5.png", progress: "80% Complete", course:"Web Development" , authorName:"Thamas Alva Edision"}],
  [{ logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png", authorImg: "https://www.w3schools.com/w3images/avatar1.png" , progress: "70% Complete", course: "Software Development", authorName:"William joe" }]
];


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
                  {rowData.map((row, index) => (
                    <Row key={index} columns={row} />
                  ))}
                </div>
              } />
              
              {/* course details */}
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