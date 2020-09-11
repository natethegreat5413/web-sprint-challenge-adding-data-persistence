
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'sprint challenge', project_description: 'creating a backend', isComplete: false},
        {project_name: 'Drink a gallon of milk', project_description: 'Drink a gallon of milk without throwing up.', isComplete: true},
        {project_name: 'computer science', project_description: 'learning python', isComplete: false},
        
      ]);
    });
};
