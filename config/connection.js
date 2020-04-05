const mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "lk7oi8odtwzy5d2j",
		password: "ob6sp4z2h16wtycb",
		database: "gxb0ervmh0px8zv8"
	});
}
connection.connect((err) => {
	if(err) {
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});
module.exports = connection;