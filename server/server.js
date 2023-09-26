const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const dataRoute = require('./route/Route');

app.use(cors());

app.use('/api/data', dataRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
