import React from 'react';
import './Column.css';

function Column({ authorImg, progress, course, authorName,duration }) {
  return (
    <div className='whole-column-container'>
    <div className='courses-box'>
      <div className='box-logo'>

        <p className='course-name'>{course}</p>
      </div>
      <div className='box-img'>
        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxX1uQP5PMmQRQeW7C351Kpb-3P7mSDmpXLvmOHcvnZWPOl_XtFZK_z68&s${authorImg}`} alt="Author" className="author-img" />
        <p className='authorName'>{authorName}</p>
      </div>

      <div className='box-content'>
        <div className="lesson-hours">
          <p>🕮 15 lessons</p>
          <p>⏱ {duration}Hours</p>
        </div>
        <p className="progress-status">{progress}</p>
      </div>
    </div>
    </div>
  );
}
export default Column;

