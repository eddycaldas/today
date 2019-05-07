module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/today',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL+ '?ssl=true',
  }
}