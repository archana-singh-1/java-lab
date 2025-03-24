import React from 'react'
import './Column.css'

function Column ({logo, authorImg, progress, course, authorName}) {
  return (
    <>
          <div className='courses-box'>
                <div className='box-logo'>
                    <img src={logo} alt="Technology Logo" className='logo'></img>
                    <p className='course-name'>{course}</p>
                </div>
                <div className='box-img'>
                    <img src={authorImg} alt="Author" className="author-img"></img>
                    <p className='authorName'>{authorName}</p>
                </div>
                <div className='box-content'>
                    <p>🕮 15 lessons</p>
                    <p>⏱ 40 Hours</p>
                    <p className="progress-status">{progress}</p>
        
                </div>
          </div>
    </>
  )
}

export default Column
