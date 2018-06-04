const express = require('express');
const router = express.Router();
const ToDo = require('../modules/toDo.schema');

router.post('/', (req, res) => {
    console.log(req.body);
    ToDo.create(req.body)
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(501);
    })
});

router.get('/', (req, res) => {
    ToDo.find({})
    .then((data) => {
        res.send(data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    })
})

module.exports = router;