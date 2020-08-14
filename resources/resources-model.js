const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add
}

// retrieve a list of resources
function find(){
    return db('resources')
}

function findById(id){
    return db('resources')
    .where({id})
    .first()
}


// add a resource
function add(resource){
    return db('resources')
    .insert(resource, 'id')
    .then(([id]) => {
        return findById(id)
    })
    .catch(error => {
        console.log(error)
    })
}