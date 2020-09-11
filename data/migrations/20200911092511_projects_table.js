
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments('id')
      tbl.text('project_name')
        .notNullable()
      tbl.text('project_description')
        .notNullable()
      tbl.boolean('isComplete').notNullable().defaultTo(false)
  })
  .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        .notNullable()
        .references('projects.id')
      tbl.integer('resource_id')
        .notNullable()
        .references('resources.id')
      tbl.primary(['project_id', 'resource_id'])
  })
  .createTable('resources', tbl => {
      tbl.increments('id')
      tbl.text('resource_name')
        .notNullable()
      tbl.text('resource_description')
        .notNullable()
  })
  .createTable('tasks', tbl => {
      tbl.increments('id')
      tbl.integer('project_id')
        .notNullable()
        .references('projects.id')
      tbl.text('task_description')
        .notNullable()
      tbl.text('task_notes', 280)
        .notNullable()
      tbl.boolean('isComplete').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('projects')
};
