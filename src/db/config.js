require('dotenv').config();

module.exports = {
  'database': process.env.DATABASE_NAME,
  'username': process.env.DATABASE_USERNAME,
  'password': process.env.DATABASE_PASSWORD,
  'host': process.env.DATABASE_HOST,
  'port': process.env.DATABASE_PORT,
  'dialect': process.env.DATABASE_DIALECT
};
