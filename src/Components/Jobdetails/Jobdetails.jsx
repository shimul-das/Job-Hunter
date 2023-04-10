import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'
import job_d from './../../../public/jobs.json';

const Jobdetails = () => {
const data=useLoaderData();
const { jobId } = useParams();
console.log(data);

  const job=data.find(a=>a.id==jobId)
  console.log(job)


//console.log(jobId)
// const job = data.find(job => id === jobId);
// console.log(job);
// const { id } = useParams();
// console.log(id)
// const data=useLoaderData();
// console.log(data);
//console.log(id);
// const [jobsData, setJobsData] = useState([]);


// const job = jobsData.find(job => job.id === jobId);
// console.log(job);
return (
<div>
  <h2>Jobdetails:{job.id}</h2>
  <p>{job.job_title}</p>
</div>
)
}

export default Jobdetails

///////////////
