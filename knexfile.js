module.exports = {
  heroku: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/today',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL,
  }
}