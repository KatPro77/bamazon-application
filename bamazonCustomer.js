const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err}`);
    }

    console.log("connected!");

});