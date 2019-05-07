const knex = require('./knex');

module.exports = {
  article: {
    list: function() {
      return knex('article')
    }
  }
}