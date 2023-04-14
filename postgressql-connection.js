const { Pool, Client } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: '<username>',
  host: '<host>',
  database: '<database>',
  password: '<password>',
  port: '<port>'
});

// Use the pool to query the database
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});


///another file

const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  user: '<username>',
  host: '<host>',
  database: '<database>',
  password: '<password>',
  port: '<port>'
});

// Connect to the client and query the database
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
