const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

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

    loadProducts();
    console.log("connected!");

});

const loadProducts = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) {
            throw err;
        }

        console.table(res);



    });

}