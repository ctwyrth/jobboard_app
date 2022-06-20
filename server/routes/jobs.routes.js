const express = require('express');
const router = express.Router();
const { Job } = require('../models');

router.get('/', async (req, res) => {
   const listOfJobs = await Job.findAll();
   res.json(listOfJobs);
});

router.post('/', async (req, res) => {
   const newJob = req.body;
   await Job.create(newJob);
   res.json(newJob);
})

module.exports = router;