import React from 'react'
import { Link } from 'react-router-dom';


const Job = ({job}) => {
  const {id,job_title} =job;
  return (
    <div>
        <h1>This is a job:{id}</h1>
        <p>{job_title}</p>
        <p> <Link to={`/job/${id}`}>Shome details about me</Link> </p>
    </div>
  )
}

export default Job