
exports.up = function(knex) {
  return (
      knex.schema.createTable('projects', tbl => {
          tbl.increments('id')
          tbl.string('project_name', 255).notNullable()
          tbl.text('description', 255)
          tbl.boolean('isCompleted').notNullable().defaultTo(false)
      })
      .createTable('resources', tbl => {
          tbl.increments('id')
          tbl.integer('projects_id')
            .notNullable()
            .references('projects.id')
          tbl.string('resource_name', 255).notNullable()
          tbl.text('description')
      })
      .createTable('tasks', tbl => {
          tbl.increments('id')
          tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
          tbl.text('description', 255).notNullable()
          tbl.text('notes')
          tbl.boolean('isCompleted').notNullable().defaultTo(false)
      })
      
  )
};

exports.down = function(knex) {
  return (
      knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  )
};
