import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Reading', value: 30, color: '#8884d8' },
  { name: 'Writing', value: 20, color: '#82ca9d' },
  { name: 'Video', value: 25, color: '#ffc658' },
  { name: 'Assignment', value: 25, color: '#ff8042' },
];

const lineDataSets = {
  Reading: [
    { day: 'Mon', value: 2 },
    { day: 'Tue', value: 3 },
    { day: 'Wed', value: 4 },
    { day: 'Thu', value: 3 },
    { day: 'Fri', value: 5 },
    { day: 'Sat', value: 2 },
    { day: 'Sun', value: 4 },
  ],
  Writing: [
    { day: 'Mon', value: 1 },
    { day: 'Tue', value: 2 },
    { day: 'Wed', value: 1 },
    { day: 'Thu', value: 3 },
    { day: 'Fri', value: 2 },
    { day: 'Sat', value: 1 },
    { day: 'Sun', value: 2 },
  ],
  Video: [
    { day: 'Mon', value: 3 },
    { day: 'Tue', value: 2 },
    { day: 'Wed', value: 4 },
    { day: 'Thu', value: 4 },
    { day: 'Fri', value: 5 },
    { day: 'Sat', value: 3 },
    { day: 'Sun', value: 4 },
  ],
  Assignment: [
    { day: 'Mon', value: 1 },
    { day: 'Tue', value: 1 },
    { day: 'Wed', value: 2 },
    { day: 'Thu', value: 2 },
    { day: 'Fri', value: 3 },
    { day: 'Sat', value: 2 },
    { day: 'Sun', value: 2 },
  ],
};

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [activeActivity, setActiveActivity] = useState('Reading');

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
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  onClick={(entry) => setActiveActivity(entry.name)}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <span>2h 35m</span>
            </div>

            <div className="dashboard-legend">
              {pieData.map((item, index) => (
                <p key={index} onClick={() => setActiveActivity(item.name)} style={{ cursor: 'pointer' }}>
                  <span className="dot" style={{ backgroundColor: item.color }}></span>{item.name}
                </p>
              ))}
            </div>
          </div>
         <div className="dashboard-activity-chart">
            <div className='time-cart'>
              <h3>My Activity</h3>
              <h4>{activeActivity}</h4>
            </div>
            <LineChart
              width={200}
              height={185}
              data={lineDataSets[activeActivity]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
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
            <h4>History of Java</h4>
            <span>By Priyanka</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <a href="https://www.geeksforgeeks.org/the-complete-history-of-java-programming-language/" target="_blank" rel="noreferrer">View Course</a>
          </div>
          <div className="dashboard-course-card">
            <div>
            <h4>Important Java Programs</h4>
            <span>By Archna</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <a href="https://www.geeksforgeeks.org/java-programming-examples/" target="_blank" rel="noreferrer">View Course</a>
          </div>
          <div className="dashboard-course-card">
            <div>
            <h4>Java Learning path</h4>
            <span>By Priya</span>
            </div>
            <p>25% complete | ⭐ 4.3</p>
            <a href="https://roadmap.sh/java" target="_blank" rel="noreferrer">View Course</a>
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
