const path = require('path');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

const serv = express();

serv.use(cors());
serv.use(express.json());

// serv.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });
serv.use(express.static(path.join(__dirname, '../client')));

serv.use('/api', apiRouter);

serv.listen(3000);