const knex = require('./');

module.exports = {
  article: {
    list() {
      return knex('article')
    }
  }
}