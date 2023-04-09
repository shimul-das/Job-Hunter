import React from 'react'
import './headerslider.css'


const HeaderSlide = () => {
return (
<div className='header-slider'>
    <div className='slider-info'>
        <h2 className='slider-title'>One Step Closer To Your <span className='slider-title-span'>Dream Job</span></h2>
        <p className='slider-desc'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
            Manage all your job application from start to finish.</p>
        <button className='slider-btn'>Get Started</button>
    </div>
    <div className='slider-image'>
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
    </div>

</div>
)
}

export default HeaderSlide