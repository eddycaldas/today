
exports.up = function(knex, Promise) {
  return knex.schema.createTable('article', function(table) {
    table.increments();
    table.text('title')
    table.text('articlenumber')
    table.text('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('article')
};
