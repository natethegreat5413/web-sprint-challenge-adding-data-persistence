const express = require('express')
const helmet = require('helmet')
const db = require('../db-config')
const server = express()
const projectRouter = require('../projects/project-router')
const resourceRouter = require('../resources/resource-router')
const taskRouter = require('../tasks/task-router')

server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.send({API: 'UP'})
})

module.exports = server