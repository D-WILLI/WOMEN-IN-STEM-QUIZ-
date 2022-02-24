const express = require ('express'); 
const mysql = require ('mysql'); 

// connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '',
    port:3300, 
    password: 'highscore_db'

}); 

// connection to sql 
connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });

const app = express(); 







