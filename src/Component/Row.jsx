import React from 'react'
import './Row.css'
import Column from './Column'

function Row  ({columns})  {

  return (
    <>

    <div className='row-container'>
      {columns.map((column, index)=>(
        <Column key={index} logo={column.logo} authorImg={column.authorImg} progress={column.progress} course={column.course} authorName={column.authorName}/>
      ))}
      <Column />
      <Column />
           
    </div>
    </>
  )
}

export default Row
