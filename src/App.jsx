import React from "react";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import DetailsCourse from "./Details/DetailsCourse";
import Dashboard from "./Component/Dashboard";
import Row from "./Component/Row";
import Chat from "./Component/Chat";
import "./App.css";

const rowData = [
  
  [{ logo: "https://preview.redd.it/some-people-may-think-that-the-book-in-granny-is-the-book-v0-7ndcpqgu02jb1.png?width=640&crop=smart&auto=webp&s=1572fb87ecce9fd169e50d51469d8d9e667f7ffc", authorImg: "https://www.w3schools.com/w3images/avatar2.png",  progress: "Completed", course:"Design & Histor", authorName:"William joe" } ],

 
  [{ logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png", authorImg: "https://www.w3schools.com/w3images/avatar5.png", progress: "80% Complete", course:"Web Development" , authorName:"Thamas Alva Edision"}],


  [{ logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png", authorImg: "https://www.w3schools.com/w3images/avatar1.png" , progress: "70% Complete", course: "Software Development", authorName:"William joe" }]

]
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Dashboard />
          <div className="app-container">
          {rowData.map((row, index)=>(
        <Row key={index} columns={row}/>
      ))}
    
    </div>
    <DetailsCourse/>
    <Chat/>
        </div>
      </div>
    </div>
  );
}
export default App;




