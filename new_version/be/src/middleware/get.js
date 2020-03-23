// const db = require('../db/db');
const mysql = require("mysql2");

// const connection = mysql.createConnection({
// 	host: "mysql",
// 	user: "bemusic",
// 	database: "JiL_MTDb",
// 	password: "mysql123"
// });

// let db = connection.connect(function(err){
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else{
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });

module.exports.getTest = (reg, res) => {
	let sql = "Select * From users";

	const connection = mysql.createConnection({
		host: "mysql",
		user: "bemusic",
		database: "JiL_MTDb",
		password: "mysql123"
	});

	connection.execute("SELECT * FROM users",
		function(err, results, fields) {
			console.log(err);
			console.log(results);
			console.log(fields);
	});
	connection.end();
	
	// this.connection.execute(sql,
	// 	function (err, result, fields) {
	// 		console.log(`err: ${err}`);
	// 		console.log(`result: ${result}`);
	// 		console.log(`fields: ${fields}`);
	// 	}
	// );


	res.status(201).json({
		"message": "success",
		"data": '12'
	});
	
	// db.query(sql,
	// 	(err, result, fields) => {
	// 		console.log(`err: ${err}`);
	// 		console.log(`result: ${result}`);
	// 		console.log(`fields: ${fields}`);
	// 	}
	// );
	// db.all(sql, params, (err, rows) => {
	// 	if (err) {
	// 		res.status(401).json({"error":err.message});
	// 		return;
	// 	}
	// 	res.status(200).json({
	// 		"message":"success",
	// 		"data":rows
	// 	})
	// });
}