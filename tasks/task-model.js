const db = require('../db-config')
const { where } = require('../db-config')


module.exports = {
    getTasks,
    findById,
    add
}

function getTasks(){
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.task_notes')
}

function findById(id){
    return db('tasks')
        .where({id}).first()
}

function add(newTask){
    return db('tasks')
    .insert(newTask, 'id')
    .then(([id]) => {
        return findById(id)
    })
    .catch(error => {
        console.log(error)
    })
}

