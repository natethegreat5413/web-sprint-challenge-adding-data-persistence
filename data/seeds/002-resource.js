
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'training kit', resource_description: 'provides information about apis and everything else.'},
        {resource_name: 'google', resource_description: 'Google is pretty self explanatory'},
        {resource_name: 'webMD', resource_description: 'webMD provides info on many different subjects reffering to software development.'},
        {resource_name: 'stack overflow', resource_description: 'This is a platform of smart people giving answers to random questions.'},

        
      ]);
    });
};
