const db = require('../db-config')

module.exports = {
    getProjects,
    findById,
    addProject
}

function getProjects(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id}).first()
}

function addProject(project){
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const id = ids[0]
            return findById(id)
        })
}