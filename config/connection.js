const mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 8080,
		host: "localhost",
		user: "b7817cb1b1a19c",
		password: "ab1efcc7",
		database: "heroku_ddb5fe0b041cde5"
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