// import React, { useEffect, useState } from 'react'
// import Job from '../Job/Job';

// const Jobs = () => {
//   const [jobs,setjobs]=useState([]);
//   useEffect(()=>{
//       fetch('jobs.json')
//       .then(res=>res.json())
//       .then(data=>setjobs(data))
//       },[]);
//       console.log(jobs)
// return (
// <div>
//   {
// jobs.map(job=><Job key={job.id} job={job}></Job>)
//   }
//   <button>see all</button>
// </div>
// )
// }

// export default Jobs
////////////////////////////
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(4); // add a state variable for the limit

  useEffect(() => {
    fetch('/src/jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  const handleSeeAll = () => {
    setShowAll(true);
    setLimit(jobs.length); // update the limit to the length of jobs array
  };

  return (
    <div>
      <div className='job-container'>
      {jobs.slice(0, limit).map(job => ( // use slice with the limit
        <Job key={job.id} job={job} />
      ))}
      </div>
      <div>
      {!showAll && (
        <button onClick={handleSeeAll}>See all</button>
      )}
      </div>
    </div>
  );
};

export default Jobs;

