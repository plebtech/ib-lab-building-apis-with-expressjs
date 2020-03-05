const express = require('express');
const chirpsStore = require('../chirpstore.js');

const router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (req.params.id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

module.exports = router;