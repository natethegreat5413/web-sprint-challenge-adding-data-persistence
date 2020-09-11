
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, task_description: 'Create a backend.', task_notes: '', isComplete: false},
        {project_id: 1, task_description: 'Use data persistence.', task_notes: '', isComplete: true},
        {project_id: 2, task_description: 'Buy a gallon of milk.', task_notes: 'Make sure to get whole milk.', isComplete: false},
        {project_id: 2, task_description: 'Drink all of it.', task_notes: '', isComplete: false},
        {project_id: 3, task_description: 'Get an account on webMD', task_notes: '', isComplete: true},
        {project_id: 3, task_description: 'Study python so you can get ahead.', task_notes: 'buy energy drinks to stay awake.', isComplete: false},
      ]);
    });
};
