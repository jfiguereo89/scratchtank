const express = require('express');

const app = express();
const path = require('path');
const port = 3000;

app.use('/api', (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Express server on ${port}`);
});
