const knex = require('knex')
const knexfile = require('../knexfile')

const dbConfig = knexfile.development

module.exports = knex(dbConfig)