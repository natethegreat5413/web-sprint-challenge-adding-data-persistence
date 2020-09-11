const express = require('express')

const projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
    projects.getProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body;
    
    projects.addProject(projectData)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


module.exports = router