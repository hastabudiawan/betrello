module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "clone_trello",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "mfvissmfktgtcy",
    "password": "73906993bcc0902e1259ae79fcb3e7aa80c93e1378f1a03f43a92ef459bf317a",
    "database": "d9vtd33ej8u2if",
    "host": "ec2-3-93-206-109.compute-1.amazonaws.com",
    "port": 5432,
    "dialect": "postgres",
    "dialectOptions": {
      ssl: { rejectUnauthorized: false },
    },
  },
};
