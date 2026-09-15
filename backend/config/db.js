const mysql = require("mysql2");
console.log("DB HOST:", process.env.DB_HOST);
console.log("DB PORT:", process.env.DB_PORT);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err);
    } else {
        console.log("✅ Database Connected Successfully");
    }
});

module.exports = connection;