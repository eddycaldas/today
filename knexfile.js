module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/today',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL,
  }
}