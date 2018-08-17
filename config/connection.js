var key = require("../config/password.js");
var mysql = require("mysql");
var connection;

//adding the JawsDB code to connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: key.portKey,
    user: key.userKey,
    password: key.passwordKey,
    database: 'burgers_db'
   });
}
  
   
   // Make connection.
   connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
   });
   
   
   // Export connection for our ORM to use.
   module.exports = connection;