import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobBoard = () => {
   const [ jobs, setJobs ] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3001/jobs')
         .then(res => {
            console.log(res);
            setJobs(res.data);
         })
   }, []);

   return (
      <div>
         {jobs.map((job) => {
            return (
               <div>{job.client}</div>
            )
         })}
      </div>
   )
}

export default JobBoard