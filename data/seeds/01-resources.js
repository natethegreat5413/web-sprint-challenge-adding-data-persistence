
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {projects_id: 1, resource_name: 'Vacuum Cleaner', description: 'clean-it3000'},
        {projects_id: 2, resource_name: 'paper', description: 'card stock'},
        {projects_id: 2, resource_name: 'pen', description: 'ball point pen'}
      ]);
    });
};
