import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'
import job_d from './../../../public/jobs.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar,faHouse,faPhone,faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import './jobdetails.css'

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


  const handleAddtoApplied = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    if (!appliedJobs.includes(job.id)) {
      const updatedAppliedJobs = [...appliedJobs, job.id];
      localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
      alert('Job applied successfully!');
    } else {
      alert('You have already applied for this job.');
    }
  };

return (
<div>
  <div className='jobdetails-container'>
  <h2 className='jobdetails-title'>Job Details</h2>
  </div>
  <div className='jobdetails-maincontainer'>
    <div className='main-left'>
      <p className='p-tag'><span className='title'>Job Description:</span><span className='text'> {job.job_description}</span></p>
      <p className='p-tag'><span className='title'>Job Responsibility:</span><span className='text'> {job.job_responsibility}</span></p>
      <p className='p-tag'><span className='title'>Educational Requirements:<br></br></span><span className='text'> {job.educational_requirements}</span></p>
      <p className='p-tag'><span className='title'>Experiences:<br></br></span><span className='text'> {job.experiences}</span></p>


    </div>
    <div className='main-right'>
     <p className='right-jobdetails'>Job Details</p>
     <hr />
     <p className='remote_time'><FontAwesomeIcon className='icon-jd' icon={faDollar} style={{color: "#6482b4",}}/><span className='salary'>Salary :</span><span className='jobdetail-variable'>{job.salary}</span></p>
     <p className='remote_time'><FontAwesomeIcon className='icon-jd' icon={faHouse} style={{color: "#6482b4",}}/><span className='salary'>Job Title :</span><span className='jobdetail-variable'>{job.job_title}</span></p>
     <p className='right-jobdetails'>Contact Information</p>
     <hr />
     <p className='remote_time'><FontAwesomeIcon className='icon-jd' icon={faPhone} style={{color: "#6482b4",}}/><span className='salary'>Phone :</span><span className='jobdetail-variable'>{job.contact_information.phone}</span></p>
     <p className='remote_time'><FontAwesomeIcon className='icon-jd' icon={faEnvelope} style={{color: "#6482b4",}}/><span className='salary'>Email :</span><span className='jobdetail-variable'>{job.contact_information.email}</span></p>
     <p className='remote_time'><FontAwesomeIcon className='icon-jd' icon={faLocation} style={{color: "#6482b4",}}/><span className='salary'>Address :</span><span className='jobdetail-variable'>{job.location}</span></p>
     <button className='slider-btn1' onClick={()=>handleAddtoApplied(job)} >Apply Now</button>
    
    </div>

  </div>
</div>
)
}

export default Jobdetails

///////////////


