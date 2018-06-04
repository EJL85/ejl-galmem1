module.exports = {
  development: {
      client: "pg",
      connection: "postgres://localhost:/drilltest"
  },
  production: {
      client: "pg",
      connection: process.env.DATABASE_URL
  }
};