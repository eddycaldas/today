module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/today',
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL
},
  }
}