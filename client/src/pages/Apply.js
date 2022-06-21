import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import parseJSON from 'date-fns/parseJSON';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ApplicationForm from '../components/ApplicationForm';

function Apply() {
   const [ job, setJob ] = useState({});
   const [ howLong, setHowLong ] = useState(");")
   const { id } = useParams();

   useEffect(() => {
      axios.get('http://localhost:3001/jobs/byId/' + id)
      .then((response) => {
         setJob(response.data);
         const cDate = parseJSON(response.data.createdAt);
         setHowLong(formatDistanceToNow(cDate, {addSuffix: true}));
         })

         .catch((err) => {
            console.log(err)
         })
   }, []);


   return (
      <>
         <CssBaseline />
         <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
               {job.urgency === "High" && <div><Typography variant="h6" component="span" sx={{ backgroundColor: "red", color: "white", fontSize: 16, py: .5, px: 1 }}>You are applying to a HIGH priority posting for:</Typography></div>}

               {job.urgency === "Med" && <div><Typography variant="h6" component="span" sx={{ backgroundColor: "orange", color: "white", fontSize: 16, py: .5, px: 1 }}>You are applying to a MEDIUM priority posting for:</Typography></div>}

               {job.urgency === "Low" && <div><Typography variant="h6" component="span" sx={{ backgroundColor: "green", color: "white", fontSize: 16, py: .5, px: 1 }}>You are applying to a posting for:</Typography></div>}
               
               <Typography variant="h4" component="h1" sx={{ mt: 1.5 }}>{job.role}</Typography>
               <Typography variant="h5" component="span" sx={{ color: " #1675d1"}}>{job.client}</Typography><br />

               <Container maxWidth="md" sx={{ mt: 2 }}>
                  <Typography variant="p"><strong>POINT OF CONTACT:</strong> {job.poc} </Typography>
                  <Typography variant="p">(<Link to='/' onClick={() => window.location.href = `mailto:${job.email}`}>{job.email}</Link>)</Typography><br />
                  <Typography variant="p"><strong>SKILLS:</strong> {job.skills} | <strong>OPEN ROLES:</strong> {job.quantity}</Typography><br />
                  <Typography variant="p" sx={{ color: "darkslategray", fontSize: 12 }}>Posted {howLong}</Typography><br />
                  <ApplicationForm id={job.id} />
               </Container>
            </Box>
         </Container>
      </>
   )
}

export default Apply;