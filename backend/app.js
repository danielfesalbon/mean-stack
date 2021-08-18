/* 
 *               **** NOTE ****
 * -----------------------------------------
 * This file app.js is the main NodeJS file
 * -----------------------------------------
 */



const express = require('express');
const bodyParser = require("body-parser");
/*const app = express();
app.use(bodyParser.json());*/

const { mongoose } = require("./db");

var app = express();
app.use(bodyParser.json());
/*const db = require("./db");
const collection = "list";
const { exec } = require("child_process");*/
var employeecontroller = require('./controller/employeecontroller.js');

/*
 * ----------------------------------------------
 * Opens the database in the local project folder
 * ----------------------------------------------
 */
/*exec("mongod", (error, stdout, stderr) => {
    console.log('Console: ' + stdout);
    if (error) {
        console.log('Error: ' + error);
        process.exit(1);
    }
    if (stderr) {
        console.log('Problem: ' + stderr);
        process.exit(1);
    }
});*/

/*
 * ----------------------------------------------
 * Connecting to the database
 * ----------------------------------------------
 */
/*db.connect((err) => {
    if (err) {
        console.log("Error: " + err);
        console.log("Can't connect..");
        process.exit(1);
    } else {
        app.listen(3000, () => {
            console.log("Connection success. Listening on port: 3000");
        });
    }
})*/
app.listen(3000, () => {
    console.log("Connection success. Listening on port: 3000");
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/employee', employeecontroller);