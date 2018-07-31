var mysql      = require('mysql');

function connection(response) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port     : 3306,
    // connectTimeout : 10000,
    database : 'mp-db'
  });
  connection.connect(function(err) {
    if (err) {
      response.json({"code" : 503, "status" : "Error in connection database"});
      return;
    }
    console.log("Connected!");
  });
  return connection;
}

module.exports = {
  connection: connection
}