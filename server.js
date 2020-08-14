const express = require('express')

const server = express()
const ProjectsRouter = require('./projects/projects-router')
const TasksRouter = require('./tasks/tasks-router')
const ResourcesRouter = require('./resources/resources-router')

server.use(express.json())
server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)

module.exports = server