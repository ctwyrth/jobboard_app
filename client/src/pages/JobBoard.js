import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Job from '../components/Job';

const JobBoard = () => {
   const [ jobs, setJobs ] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3001/jobs')
         .then(res => {
            setJobs(res.data);
         })
   }, []);

   return (
      <>
         <CssBaseline />
         <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
               {jobs.map((job) => {
                  return (
                     <div key={job.id}>
                        <Job job={job} />
                     </div>
                  )
               })}
            </Box>
         </Container>
      </>
   );
}

export default JobBoard