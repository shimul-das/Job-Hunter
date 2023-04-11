// import React from 'react'
// import { useLoaderData } from 'react-router-dom';

// const Applied = () => {
// const data1=useLoaderData();
// console.log(data1);
// const data = JSON.parse(localStorage.getItem('appliedJobs'));
// for(let d in data){
//     console.log(data[d]);
//     const job=data1.filter(a=>a.id==data[d])
// }

//   return (
//     <div>
//         <h1>This is applied</h1>
//     </div>
//   )
// }

// export default Applied
//////////////////////////////
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './applied.css'

const Applied = () => {
  const data1 = useLoaderData();
  console.log(data1);

  const appliedJobsData = JSON.parse(localStorage.getItem('appliedJobs'));
  const appliedJobs = data1.filter(job => appliedJobsData.includes(job.id));

  return (
    <div>
      <div className='sliderfor-applied'>
      <h1>Applied Jobs</h1>
      </div>
      
      <ul>
        {appliedJobs.map(job => (
          <li key={job.id}>
            <h2>{job.job_title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applied;
