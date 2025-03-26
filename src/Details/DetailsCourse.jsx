import React from 'react'
import './DetailsCourse.css'

function DetailsCourse () {

  return (
    <>
    <div className='whole-details-page'>
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

            <div className='details-overview'>
                <div className='overview-description'>
                    <a href='#'>Overview</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Discussion</a>
                    <a href='#'>Reviews</a>
                </div>
                <div className='details-line'></div>

                <div className='about-course-overview'>
                    <h5>Course  Description</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel quod, maiores distinctio voluptatem quisquam at nihil sequi! Voluptas voluptates ipsam pariatur nesciunt quae officiis id, amet accusantium asperiores libero?</p>
                </div>

                <div className='about-course-overview'>
                    <h5>Course  Outcomes</h5>
                    <ul>
                        <li>15 lectures and 5.5 hours of content!</li>
                        <li>Live project end to end software</li>
                        <li>Basics designing in Figma</li>
                        <li>Alli about Figma</li>
                    </ul>
                </div>

                <div className='about-course-overview'>
                    <h5>Audience</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel quod, maiores distinctio voluptatem quisquam at nihil sequi! Voluptas voluptates ipsam pariatur nesciunt quae officiis id, amet accusantium asperiores libero?</p>
                </div>
            </div>
        </div>

        <div className='detains-second'>
            <div className='details-second-section'>
                <img src='/detains.png'></img>
                {/* <h1>Course Content</h1>
                <p>Lecture (15) Totla (5.5hrs)</p>
                <div className='second-section-main'></div> */}
            </div>
        </div>
    </div>
    </>
  )
}
export default DetailsCourse
