import React from 'react'
import { useNavigate } from "react-router-dom";
import './Row.css'
import Column from './Column'

function Row  ({columns})  {
  const navigate = useNavigate();

  return (
    <>

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
        </div>
      ))}
      <Column />
      <Column />
           
    </div>
    </>
  )
}

export default Row
