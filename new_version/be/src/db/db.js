const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "mysql",
	user: "bemusic",
	database: "JiL_MTDb",
	password: "mysql123"
});

let db = connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

let db_end = connection.end(function(err) {
	if (err) {
		return console.log("Ошибка: " + err.message);
	}
	console.log("Подключение закрыто");
});


module.exports = db;
module.exports = db_end;
module.exports = mysql;