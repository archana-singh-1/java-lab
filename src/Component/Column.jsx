import React from 'react';
import './Column.css';

function Column({ logo, authorImg, progress, course, authorName,duration }) {
  return (
    <div className='courses-box'>
      <div className='box-logo'>
        <img src={logo} alt="Technology Logo" className='logo' />
        <p className='course-name'>{course}</p>
      </div>

      <div className='box-img'>
        <img src={authorImg} alt="Author" className="author-img" />
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
  );
}

export default Column;

