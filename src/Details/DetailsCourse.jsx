import React from 'react'
import './DetailsCourse.css'

function DetailsCourse () {

  return (
    <>
    <div className='details-container'>
        {/* <div className='details-course'> */}
        <div className="course-video">
            <iframe
                src="https://www.youtube.com/embed/your-video-id" title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

            </iframe> 
        </div>
        <div className='details-video'>
            <h1 >Introduction Figma Basic to Advance.</h1>
            <div className='detains-second-line'>
                <p>William joe</p>
                <p>| Figma </p>
                <p style={{color:"green"}}>| +Follow</p>
            </div>
            
        </div>

        <div className=''>
            <a href='#'>Overview</a>
            <a href='#'>Overview</a>
            <a href='#'>Overview</a>
        </div>
    </div>
    </>
  )
}

export default DetailsCourse
