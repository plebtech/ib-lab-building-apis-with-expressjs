const express = require('express');
const chirpsStore = require('../chirpstore.js');

let router = express.Router();

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.UpdateChirp(id, req.body));
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.DeleteChirp(id));
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;