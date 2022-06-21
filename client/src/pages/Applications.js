import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function Applications() {
   const [ apps, setApps ] = useState([]);
   const [ jobs, setJobs ] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:3001/users")
         .then((response) => {
            setApps(response.data);
         })
         .catch((err) => {
            console.log(err);
         });
      axios.get("http://localhost:3001/jobs")
         .then((response) => {
            setJobs(response.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <>
         <CssBaseline />
         <Container maxWidth="md" sx={{ mt: 4 }}>
            <TableContainer component={Paper}>
               {jobs.map((job) => {
                  return (
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                           <TableRow key={job.id}>
                              <TableCell colSpan={2}>{job.role} - {job.client}</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {apps.filter(app => app.job_id === job.id).map(app => {
                              return (
                                 <TableRow>
                                    <TableCell>{app.firstName} {app.lastName}</TableCell>
                                    <TableCell>{app.email}</TableCell>
                                 </TableRow>
                              )
                           })}
                        </TableBody>
                     </Table>
                  )
               })}
            </TableContainer>
         </Container>
      </>
   )
}

export default Applications