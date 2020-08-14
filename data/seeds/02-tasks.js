
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projects_id: 1, description: 'Vacuum floor', notes: 'get under the couches.'},
        {projects_id: 1, description: 'mop kitchen', notes: 'scrub extra hard.'},
        {projects_id: 2, description: 'Do homework', notes: 'Dont forget to do the extra problems.'},
        {projects_id: 2, description: 'turn in homework', notes: 'You forgot to turn it in last time, do not forget this time.'},
      ]);
    });
};
