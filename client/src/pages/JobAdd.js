import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import JobForm from '../components/JobForm';
import Typography from '@mui/material/Typography';

function JobAdd() {
   return (
      <>
         <CssBaseline />
         <Container maxWidth="md">
            <Typography variant="h4" sx={{ color: "#f8a833", mt: 4, textAlign: "center" }}>Add A New Job Opportunity</Typography>
            <JobForm />
         </Container>
      </>
   )
}

export default JobAdd;