import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Column from './Column';
import './Row.css';

function Row() {
  const [courses, setCourses] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://java-backen.onrender.com/api/courses/getCourse')
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data && data.length > 0) {
          const seen = new Set();
          const uniqueCourses = data.filter((course) => {
            if (!seen.has(course.title)) {
              seen.add(course.title);
              return true;
            }
            return false;
          });
          setCourses(uniqueCourses);
        }
      })
      .catch((error) => console.error('Error fetching course data:', error));
  }, []);

  return (
    <div className='row-container'>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index} onClick={() => navigate("/course-details")} style={{ cursor: "pointer" }}>
            <Column
              authorImg={course.authorImg || "default-author.png"}
              progress={course.progress || "0% Completed"}
              course={course.title} 
              authorName={course.teacherName} 
              duration={course.duration}
            />
          </div>
        ))
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
}

export default Row;

