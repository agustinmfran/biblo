module.exports = {
  development: {
    username: "root",
    password: "supernova22",
    database: "biblo_db",
    host: "34.163.134.235",
    dialect: "mysql",
    define: {
      underscored: true,
      paranoid: true,
    },
  },
  test: {
    username: "root",
    password: "flixar",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "root",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
