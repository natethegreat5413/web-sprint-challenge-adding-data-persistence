const express = require('express')

const task = require('./task-model')

const router = express.Router()

router.get('/', (req, res) => {
    
    task.getTasks()
    .then(rec => {
        res.status(200).json(rec)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.post('/', (req, res) => {
    const taskData = req.body;

    task.add(taskData)
    .then(added => {
        res.status(201).json(added)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


module.exports = router