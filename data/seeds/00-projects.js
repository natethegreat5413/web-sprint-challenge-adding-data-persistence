
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Clean house', description: 'Clean the house', isCompleted: true},
        {project_name: 'Do homework', description: 'Complete my homework', isCompleted: true},
        
      ]);
    });
};
