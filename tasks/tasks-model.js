const db = require('../data/dbConfig')

module.exports = {
    findById,
    add,
    getTasks
}

function findById() {
    return db('tasks')
    .where({id})
    .first()
}

function add(task){
    return db('tasks')
    .insert(task, 'id')
    .then(([id]) => {
        return findById(id)
    })
    .catch(error => {
        console.log(error)
    })
}

function getTasks() {
    function getTasks(){
        return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.description', 'projects.name', 'projects.description')
    }
}