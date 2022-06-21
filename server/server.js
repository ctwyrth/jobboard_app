const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Establish routes
const jobsRouter = require('./routes/jobs.routes');
const usersRouter = require('./routes/users.routes');
app.use('/jobs', jobsRouter);
app.use('/users', usersRouter);

// Connect with db
const db = require('./models');

// Check for server
db.sequelize.sync()
   .then(() => {
      app.listen(3001, () => { console.log("The eye of Sauron is upon you..."); });
   })
   .catch(err => {
      console.log(err);
   });
