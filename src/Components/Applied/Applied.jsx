// import React from 'react'
// import { useLoaderData } from 'react-router-dom';

// const Applied = () => {
// const data1=useLoaderData();
// console.log(data1);
// const data = JSON.parse(localStorage.getItem('appliedJobs'));
// for(let d in data){
// console.log(data[d]);
// const job=data1.filter(a=>a.id==data[d])
// }

// return (
// <div>
  // <h1>This is applied</h1>
  // </div>
// )
// }

// export default Applied
//////////////////////////////
// import React from 'react'
// import { useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faDollar } from '@fortawesome/free-solid-svg-icons'
// import './applied.css'

// const Applied = () => {
// const data1 = useLoaderData();
// console.log(data1);

// const appliedJobsData = JSON.parse(localStorage.getItem('appliedJobs'));
// const appliedJobs = data1.filter(job => appliedJobsData.includes(job.id));

// return (
// <div className='applied-container'>
//   <div className='sliderfor-applied'>
//     <h1>Applied Jobs</h1>
//   </div>
//   <ul>
//     {appliedJobs.map(job => (
//       <div className='container'>
//       <div className='review-item'>
//       <img src={job.company_logo} alt="" />
//       <div className='review-details'>
//         <p className='product-title'> </p>
//         <h2 className='job-title'>{job.job_title}</h2>
//         <p className='company_name c1'>{job.company_name}</p>
//         <p className='remote_time p1'><span className='fulltime_or_parttime'>{job.remote_or_onsite}</span> <span className='fulltime_or_parttime'>{job.fulltime_or_parttime}</span></p>
//         <p className='icon i1'><FontAwesomeIcon icon={faLocationDot}  /><span className='location'>{job.location}</span> <FontAwesomeIcon className='dollar-icon' icon={faDollar }  /><span className='dollar'>{job.salary}</span></p>
//       </div>
//       <button  className='applied-btn'><Link className='link' to={`/job/${job.id}`}>View Details</Link></button>
//     </div>
//     </div>
//     ))}
//   </ul>
// </div>
// );
// }

// export default Applied;
/////////////////////////////
// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faDollar } from '@fortawesome/free-solid-svg-icons'
// import './applied.css'

// const Applied = () => {
//   const data1 = useLoaderData();
//   console.log(data1);

//   const appliedJobsData = JSON.parse(localStorage.getItem('appliedJobs'));
//   const appliedJobs = data1.filter(job => appliedJobsData.includes(job.id));

//   // State to track the current filter value
//   const [filterValue, setFilterValue] = useState('');

//   // Filter function to apply the current filter value
//   const filterJobs = (job) => {
//     if (filterValue === '') {
//       return true;
//     } else if (filterValue === 'Remote') {
//       return job.remote_or_onsite === 'Remote';
//     } else if (filterValue === 'Onsite') {
//       return job.remote_or_onsite === 'Onsite';
//     }
//   };

//   return (
//     <div className='applied-container'>
//       <div className='sliderfor-applied'>
//         <h1>Applied Jobs</h1>
//       </div>
//       <div className="filter-buttons">
//         <button className='f-b' onClick={() => setFilterValue('')}>All</button>
//         <button className='f-b' onClick={() => setFilterValue('Remote')}>Remote</button>
//         <button className='f-b' onClick={() => setFilterValue('Onsite')}>Onsite</button>
//       </div>
//       <ul>
//         {appliedJobs.filter(filterJobs).map(job => (
//           <div className='container' key={job.id}>
//             <div className='review-item'>
//               <img src={job.company_logo} alt="" />
//               <div className='review-details'>
//                 <p className='product-title'> </p>
//                 <h2 className='job-title'>{job.job_title}</h2>
//                 <p className='company_name c1'>{job.company_name}</p>
//                 <p className='remote_time p1'><span className='fulltime_or_parttime'>{job.remote_or_onsite}</span> <span className='fulltime_or_parttime'>{job.fulltime_or_parttime}</span></p>
//                 <p className='icon i1'><FontAwesomeIcon icon={faLocationDot} /><span className='location'>{job.location}</span> <FontAwesomeIcon className='dollar-icon' icon={faDollar} /><span className='dollar'>{job.salary}</span></p>
//               </div>
//               <button className='applied-btn'><Link className='link' to={`/job/${job.id}`}>View Details</Link></button>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Applied;


///////////////////
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import './applied.css'

const Applied = () => {
  const data1 = useLoaderData();
  console.log(data1);

  const appliedJobsData = JSON.parse(localStorage.getItem('appliedJobs'));
  
  if (!appliedJobsData || !appliedJobsData.length) {
    return (
      <div className='applied-container'>
        <div className='sliderfor-applied'>
          <h1>Applied Jobs</h1>
        </div>
        <h2 className='not-applied'>No jobs have been applied to yet.</h2>
      </div>
    );
  }

  const appliedJobs = data1.filter(job => appliedJobsData.includes(job.id));

  // State to track the current filter value
  const [filterValue, setFilterValue] = useState('');

  // Filter function to apply the current filter value
  const filterJobs = (job) => {
    if (filterValue === '') {
      return true;
    } else if (filterValue === 'Remote') {
      return job.remote_or_onsite === 'Remote';
    } else if (filterValue === 'Onsite') {
      return job.remote_or_onsite === 'Onsite';
    }
  };

  return (
    <div className='applied-container'>
      <div className='sliderfor-applied'>
        <h1>Applied Jobs</h1>
      </div>
      <div className="filter-buttons">
        <button className='f-b' onClick={() => setFilterValue('')}>All</button>
        <button className='f-b' onClick={() => setFilterValue('Remote')}>Remote</button>
        <button className='f-b' onClick={() => setFilterValue('Onsite')}>Onsite</button>
      </div>
      <ul>
        {appliedJobs.filter(filterJobs).map(job => (
          <div className='container' key={job.id}>
            <div className='review-item'>
              <img src={job.company_logo} alt="" />
              <div className='review-details'>
                <p className='product-title'> </p>
                <h2 className='job-title'>{job.job_title}</h2>
                <p className='company_name c1'>{job.company_name}</p>
                <p className='remote_time p1'><span className='fulltime_or_parttime'>{job.remote_or_onsite}</span> <span className='fulltime_or_parttime'>{job.fulltime_or_parttime}</span></p>
                <p className='icon i1'><FontAwesomeIcon icon={faLocationDot} /><span className='location'>{job.location}</span> <FontAwesomeIcon className='dollar-icon' icon={faDollar} /><span className='dollar'>{job.salary}</span></p>
              </div>
              <button className='applied-btn'><Link className='link' to={`/job/${job.id}`}>View Details</Link></button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Applied;
