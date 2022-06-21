import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Applied() {
   const [ job, setJob ] = useState({});
   const { id } = useParams();

   useEffect(() => {
      axios.get('http://localhost:3001/jobs/byId/' + id)
         .then((response) => {
            setJob(response.data);
            console.log(response.data);
         })
         .catch((err) => {
            console.log(err);
         })
   }, []);

   return (
      <>
         <CssBaseline />
         <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
               <Typography variant="h4" sx={{ my: 4, textAlign: "center" }}>You've successfully applied to the {job.role} position at {job.client}.</Typography>
               <div style={{ textAlign: "center" }}>
                  <Link to="/">Return Home</Link>
               </div>
            </Box>
         </Container>
      </>
   )
}

export default Applied;