import React from 'react';
import { Link } from 'react-router-dom';
import parseJSON from 'date-fns/parseJSON';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Job = (props) => {
   const { job } = props;

   const postedDate = parseJSON(job.createdAt);
   const howOld = formatDistanceToNow(postedDate, {addSuffix: true});

   return (
      <Paper elevation={8} square sx={{ mb: 3, padding: 1, borderRight: "4px solid #f8a833", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
         <div>
            <Typography variant="p" sx={{ color: "#0474e6"}}><strong>{job.client}</strong> - </Typography>
            {job.urgency === "High" && <Typography variant="p" sx={{ color: "red", fontSize: 12 }}> HIGH PRIORITY</Typography>}
            {job.urgency === "Med" && <Typography variant="p" sx={{ color: "orange", fontSize: 12 }}> MEDIUM PRIORITY</Typography>}
            <Typography variant="h6">{job.role}</Typography>

            <Typography variant="span" sx={{ color: "darkgray", fontSize: ".85rem" }}>Posted {howOld} ・ Contact: {job.poc} @ <Link to='/' onClick={() => window.location.href = `mailto:${job.email}`}>{job.email}</Link></Typography>
         </div>
         <Button variant="contained" href={"/apply/" + job.id} sx={{ margin: 2 }}>Apply</Button>
      </Paper>
   )
}

export default Job;