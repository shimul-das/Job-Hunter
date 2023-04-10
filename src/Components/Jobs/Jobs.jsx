import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

const Jobs = () => {
  const [jobs,setjobs]=useState([]);
  useEffect(()=>{
      fetch('jobs.json')
      .then(res=>res.json())
      .then(data=>setjobs(data))
      },[]);
      console.log(jobs)
return (
<div>
  {
jobs.map(job=><Job key={job.id} job={job}></Job>)
  }
  
</div>
)
}

export default Jobs