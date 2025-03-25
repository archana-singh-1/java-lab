import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronDown
  } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="dashboard-container">
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Hi Mahima!</h1>
        <p>You have complete 5 lesson in last day.</p> 
        <p>Start your learning today.</p>
      </div>
      <div className='dashboard-charts'>
      <div className="dashboard-learning-time-card">
        <div className='time-cart'>
            <h3>Learning Time</h3>
            <h4>Today <a href="#"><FontAwesomeIcon icon={faChevronDown} /></a></h4>
        </div>
          <div className="dashboard-circle-chart">
            <span>2h 35m</span>
          </div>
          <div className="dashboard-legend">
            <div>
            <p><span className="dot reading"></span>Reading</p>
            <p><span className="dot writing"></span>Writing</p>
            </div>
            <div>
            <p><span className="dot video"></span>Video</p>
            <p><span className="dot assignment"></span>Assignment</p>
            </div>
          </div>
        </div>

        <div className="dashboard-activity-chart">
            <div className='time-cart'>
                <h3>My Activity</h3>
                <h4>Weekly<a href="#"><FontAwesomeIcon icon={faChevronDown} /></a></h4>
            </div>
          <img src="https://cdn.dribbble.com/users/207059/screenshots/11107013/media/640e3b4739b5e19f308b46a73d019419.png" alt="Activity Chart" />
        </div>
      </div>
        

        <div className="dashboard-courses-section">
          <div className='das-course-1'>
            <h3>My Courses</h3>
            <div className='das-course-2'>
                <h4>All</h4>
                <h4>Ongoing</h4>
                <h4>Complete</h4>
            </div>
         </div>
          <div className="dashboard-course-card">
            <div>
            <h4>History of graphic design</h4>
            <span>By William Joe</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <button>View Course</button>
          </div>
          <div className="dashboard-course-card">
            <div>
            <h4>App Design Course</h4>
            <span>By William Joe</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <button>View Course</button>
          </div>
          <div className="dashboard-course-card">
            <div>
            <h4>Digital painting</h4>
            <span>By William Joe</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <button>View Course</button>
          </div>
        </div>
        </div>
        <div className='dashboard-sidebar'>
        <div className="dashboard-calendar-section">
          <h3>June 28 Monday</h3>
          <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>
        <p className="date-para">Selected Date: {date.toDateString()}</p>
        </div>
        <div className="dashboard-tasks-payment">
        <div className='das-course-1'>
        <h3>Upcoming Task</h3>
        <span>See All</span>
        </div>
        <div className='dashboard-course-card'>
        <h4>Discussion Algorithm</h4>
        <p>08:00 AM - 15:00 PM</p>
        </div>
        <div className='dashboard-course-card'>
        <h4>Simple Home Page Design </h4>
        <p>08:00 AM - 15:00 PM</p>
        </div>
        </div>
        <div className="dashboard-tasks-payment">
            <div className='das-course-1'>
                <h3>Payment History</h3>
                <span>See All</span>
            </div>
          <div className='dashboard-course-card'>
        <h4>Wireframe & Prototype: </h4>
        <p>$120</p>
        </div>
          
          <div className='dashboard-course-card'>
        <h4>MSc in Machine Learning:</h4>
        <p>$140</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
