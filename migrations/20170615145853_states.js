exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('states', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('capital').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('states')
};
