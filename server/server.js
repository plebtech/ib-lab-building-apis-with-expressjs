const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

const serv = express();

serv.use(cors());
serv.use(express.json());

serv.use('/api', apiRouter);

serv.listen(3000);