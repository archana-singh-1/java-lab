import React from 'react'
import { useNavigate } from "react-router-dom";
import './Row.css'
import Column from './Column'

function Row  ({columns})  {
  const navigate = useNavigate();

  return (
    <>
<div className='whole-row-container'>
    <div className='row-container'>
      {columns.map((column, index)=>(
        <div key={index} onClick={() => navigate("/course-details")} style={{ cursor: "pointer" }}>
          <Column 
            logo={column.logo}
            authorImg={column.authorImg} 
            progress={column.progress} 
            course={column.course} 
            authorName={column.authorName}
            />
          <Column 
            logo={column.logo}
            authorImg={column.authorImg} 
            progress={column.progress} 
            course={column.course} 
            authorName={column.authorName}
            />
          <Column 
            logo={column.logo}
            authorImg={column.authorImg} 
            progress={column.progress} 
            course={column.course} 
            authorName={column.authorName}
            />
        </div>
      ))}
         
    </div>
    </div>
    </>
  )
}

export default Row
