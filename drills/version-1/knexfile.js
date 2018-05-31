module.exports = {
  development: {
      client: "pg",
      connection: "postgres:///drilltest"
  },
  production: {
      client: "pg",
      connection: process.env.DATABASE_URL
  }
};