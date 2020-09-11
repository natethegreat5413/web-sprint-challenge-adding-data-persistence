const express = require('express')

const resource = require('./resource-model')

const router = express.Router()

router.get('/', (req, res) => {
    const id = req.params.id;

    resource.find(id)
    .then(rec => {
        res.status(200).json(rec)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    resource.add(resourceData)
    .then(added => {
        res.status(201).json(added)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


module.exports = router