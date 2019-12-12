const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const TaskRoutes = require('./routes/Task');

const mongoose = require('mongoose');
const config = require('./config/keys.config.js');

mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error on database connection', err));
mongoose.set('useFindAndModify', false);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});

app.use('/api/tasks', TaskRoutes);
