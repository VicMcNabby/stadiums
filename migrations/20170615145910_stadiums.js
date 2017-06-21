exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('stadiums', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('team').notNullable();
      table.string('sport').notNullable();
      table.string('photo');
      table.integer('capacity');
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('id').inTable('states');
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stadiums')
};
