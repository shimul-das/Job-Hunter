import React, { useEffect, useState } from 'react'

const FetchUserData = (id) => {
    const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/src/jobs.json');
      const data = await response.json();
      setJobsData(data);
    }
    fetchData();
  }, []);

  return jobsData
}

export default FetchUserData