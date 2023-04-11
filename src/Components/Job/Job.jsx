import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import './job.css'


const Job = ({job}) => {
  const {id,job_title,company_logo,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} =job;
  return (
    // <div>
    //     <h1>This is a job:{id}</h1>
    //     <p>{job_title}</p>
    //     <p> <Link to={`/job/${id}`}>Shome details about me</Link> </p>
    // </div>
    <div className='jobDetail-container'>
      <img src={company_logo} alt="" />
      <h2 className='job-title'>{job_title}</h2>
      <p className='company_name'>{company_name}</p>
      <p className='remote_time'><span className='fulltime_or_parttime'>{remote_or_onsite}</span> <span className='fulltime_or_parttime'>{fulltime_or_parttime}</span></p>
      <p className='icon'><FontAwesomeIcon icon={faLocationDot}  /><span className='location'>{location}</span> <FontAwesomeIcon className='dollar-icon' icon={faDollar }  /><span className='dollar'>{salary}</span></p>
      <button className='job-btn'> <Link className='link' to={`/job/${id}`}>View Details</Link> </button>
    </div>

  )
}

export default Job