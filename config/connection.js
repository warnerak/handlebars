var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N*ex7USt",
    database: "taco_db"
});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

if (process.send.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vg4kofx3v5pg2ej7',
        password: 'tpvjnlbamm0frlq3',
        database: 'n0qsyx6ip8zngqoi'

    })
}

module.exports = connection;