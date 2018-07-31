function queryDb(connection, query, response) {
  connection.query(query, function (err, result, fields) {
    if(!err) {
      response.json(result);
    }
    connection.on('error', function(err) {      
      response.json({"code" : 503, "status" : "Error in connection database"});
    });
  });
}

module.exports = {
  queryDb: queryDb
}