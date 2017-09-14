exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('item', function (table) {
      table.increments('id').primary();
      table.string('name', 64);
      table.string('reason', 64);
      table.enum('cleanliness', ['sparkling', 'dusty', 'rancid']);

      table.timestamps(true, true);
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('item'),
  ]);
};