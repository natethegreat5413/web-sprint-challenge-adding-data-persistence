const db = require('../data/dbConfig')

module.exports = {
    findById,
    find,
    add
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
    .where({id})
    .first()
}

function add(project){
    return db('projects')
    .insert(project, 'id')
    .then(([id]) => {
        return findById(id)
    })
    .catch(error => {
        console.log(error)
    })
}

