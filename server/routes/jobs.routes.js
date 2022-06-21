const express = require('express');
const router = express.Router();
const { Job } = require('../models');

router.get('/', async (req, res) => {
   const listOfJobs = await Job.findAll();
   res.json(listOfJobs);
});

router.get('/byId/:id', async (req, res) =>  {
   const id = req.params.id;
   const job = await Job.findByPk(id);
   res.json(job);
})

router.post('/', async (req, res) => {
   const newJob = req.body;
   await Job.create(newJob);
   res.json(newJob);
})

module.exports = router;