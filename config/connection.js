// this is all about mysql connection

var mysql = require("mysql");


   var connection = mysql.createConnection({
        host: "localhost",
        user: "b5305b5d383537",
        password: "1a38328e",
        database: "heroku_cdc066563e33956"
    });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to MySQL! Connected as ID: " + connection.threadId);
});

// export connection to ORM
module.exports = connection;