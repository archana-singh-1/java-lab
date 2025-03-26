import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faBookOpen, 
  faFolderOpen, 
  faComments, 
  faCalendarAlt, 
  faUser, 
  faGear, 
  faRightFromBracket 
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='sidebar-heading'>
            <img src='letter-j (2).png' alt='logo name' style={{width: '50px'}}/>
            <h1 className="logo">JAVA LAB</h1>
            <p>Learn From Home</p>
        </div>

      <div className="sidebar-menus">
        <a href="#"><FontAwesomeIcon icon={faHouse} /> Dashboard</a>
        <a href="#"><FontAwesomeIcon icon={faBookOpen} /> Course</a>
        <a href="#"><FontAwesomeIcon icon={faFolderOpen} /> Resources</a>
        <a href="#"><FontAwesomeIcon icon={faComments} /> Chat</a>
        <a href="#"><FontAwesomeIcon icon={faCalendarAlt} /> Schedule</a>
        <a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
        <a href="#"><FontAwesomeIcon icon={faGear} /> Setting</a>
      </div>

      <div className="sidebar-logout">
        <a href="#"><FontAwesomeIcon icon={faRightFromBracket} /> Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
