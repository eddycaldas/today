const knex = require('./knex');

module.exports = {
  article: {
    getAll: function() {
      return knex('article')
    }
  }
}